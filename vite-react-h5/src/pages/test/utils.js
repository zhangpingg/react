import printJS from 'print-js';
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf'; // 用于在客户端浏览器中生成PDF文件和导出功能

const htmlToPdf = ({
    id, // 需要转为pdf的html容器的id 必填
    title, // download下载时文件的名称 选填
    type, // 类型 download 下载，print 打印，preview 预览
    canvasParams, // 画布（html2Canvas）的相关参数
    printParams, // 打印（print-js）的相关参数
    pdfPageCallback, // pdf的分页的自定义方法，处理完分页需要把pdf对象返回 选填
}) => {
    return new Promise((resolve, reject) => {
        html2Canvas(
            document.querySelector(`#${id}`),
            {
                taintTest: false, // 在渲染前测试图片
                background: '#fff',
                useCORS: true, // 开启跨域配置
                foreignObjectRendering: true, // 复杂的 CSS 样式，需要开启
                scale: window.devicePixelRatio,
            },
            canvasParams || {}
        )
            .then((canvas) => {
                let PDF = new JsPDF('', 'pt', 'a4'); // 页面方向,空代表默认,默认是纵向、单位、页面大小
                if (typeof pdfPageCallback === 'function') {
                    PDF = pdfPageCallback(canvas, JsPDF);
                } else {
                    console.log('canvas.width', canvas.width);
                    console.log('canvas.height', canvas.height);
                    let contentWidth = canvas.width; // 内容的宽度
                    let contentHeight = canvas.height; // 内容高度
                    // 一页pdf显示html页面生成的canvas高度,a4纸的尺寸[595.28,841.89];
                    let pageHeight = (contentWidth / 592.28) * 841.89;
                    let leftHeight = contentHeight; // 未生成pdf的html页面高度
                    let position = 0; // 页面偏移
                    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    let imgWidth = 595.28;
                    let imgHeight = (592.28 / contentWidth) * contentHeight;
                    // canvas转图片数据
                    let pageData = canvas.toDataURL('image/jpeg', 1.0);
                    // 判断是否需要分页
                    if (leftHeight < pageHeight) {
                        // 插入图片
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            if (leftHeight > 0) {
                                PDF.addPage(); // 新增一页
                            }
                        }
                    }
                }
                const blob = PDF.output('blob');
                const fileURL = URL.createObjectURL(blob);
                console.log(11, fileURL);
                switch (type) {
                    case 'download':
                        PDF.save(`${title || new Date().getTime()}.pdf`);
                        break;
                    case 'print':
                        // 打印: 只能在PC端，移动端无效
                        printJS(
                            {
                                printable: fileURL,
                                type: 'pdf',
                                header: null,
                            },
                            printParams || {}
                        );
                        console.log('print');
                        break;
                    case 'preview':
                        window.open(fileURL, '_bank');
                        break;
                    default:
                        break;
                }
                resolve({ blob, fileURL });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default htmlToPdf;
