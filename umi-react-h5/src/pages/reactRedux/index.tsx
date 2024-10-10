import { useSelector, useDispatch } from 'react-redux';
import { saveFile, clearFiles } from '@/store/reducer/user';

const UseRedux = () => {
    // useSelector 替代 mapStateToProps，从store中提取state数据
    // useDispatch 替代 mapDispatchToProps，从store中获取dispatch方法的引用
    const { IMAGES_FILES, EXCEL_FILES } = useSelector((state: any) => {
        return state?.publicRedux.user;
    });
    const dispatch = useDispatch();

    /** 上传图片文件 */
    const uploadImagesFiles = () => {
        const list = [{ a: 1 }, { b: 2 }];
        dispatch(saveFile({ IMAGES_FILES: list })); // 后期这里可以再封装一层
    };
    /** 上传excel文件 */
    const uploadExcelFiles = () => {
        const list = [{ c: 1 }, { d: 2 }];
        dispatch(saveFile({ EXCEL_FILES: list }));
    };
    /** 清空所有文件 */
    const clearAllFiles = () => {
        dispatch(clearFiles());
    };

    return (
        <div className="mt-30">
            <p>@reduxjs/toolkit 使用</p>
            <p> 图片文件：{JSON.stringify(IMAGES_FILES)}</p>
            <p> 图片文件：{JSON.stringify(EXCEL_FILES)}</p>

            <button onClick={uploadImagesFiles}>上传图片文件</button>
            <br />
            <button onClick={uploadExcelFiles}>上传excel文件</button>
            <br />
            <button onClick={clearAllFiles}>清空文件</button>
            <br />
        </div>
    );
};

export default UseRedux;
