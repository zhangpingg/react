/*
 * @Author: zhangping
 * @Date: 2025-06-18 11:18:50
 * @Description: url生产二维码
 */

import React, { useEffect } from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';

const Index = () => {
    return (
        <div>
            <QRCodeSVG
                value="https://www.baidu.com/"
                size={200}
                bgColor="#fff" // QR 码的背景色
                fgColor="#000" // QR 码的前景色
                marginSize="5" // margin 的模块数
                title="标题" // QR 码的标题
                minVersion="1" // 对 QR 码进行编码时使用的最低版本。有效值为 1-40，值越高，QR 码越复杂
                imageSettings={{
                    src: 'https://img1.baidu.com/it/u=978407991,704976145&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
                    height: 20,
                    width: 20,
                    excavate: true,
                    opacity: 0.8,
                }}
            />
            <QRCodeCanvas
                value="https://www.baidu.com/"
                size={200}
                bgColor="#fff" // QR 码的背景色
                fgColor="#000" // QR 码的前景色
                marginSize="5" // margin 的模块数
                title="标题" // QR 码的标题
                minVersion="1" // 对 QR 码进行编码时使用的最低版本。有效值为 1-40，值越高，QR 码越复杂
                imageSettings={{
                    src: 'https://img1.baidu.com/it/u=978407991,704976145&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
                    height: 20,
                    width: 20,
                    excavate: true,
                    opacity: 0.8,
                }}
            />
        </div>
    );
};

export default Index;
