import React, { useState } from 'react';
import { PhotoProvider, PhotoSlider } from 'react-photo-view';

const imgList2 = [
    { key: 1, src: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp' },
    { key: 2, src: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp' },
    { key: 3, src: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp' },
];

const Index = () => {
    const [isPreview, setIsPreview] = useState(false);
    const [previewIndex, setPreviewIndex] = useState(0);

    return (
        <div>
            {/* 显示缩略图 */}
            <div>
                {imgList2.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        style={{ width: '100px', height: '100px', marginRight: '10px' }}
                        onClick={() => {
                            setPreviewIndex(index);
                            setIsPreview(true);
                        }}
                    />
                ))}
            </div>
            {/*预览图片组件*/}
            <PhotoProvider>
                <PhotoSlider
                    visible={isPreview}
                    images={imgList2}
                    index={previewIndex}
                    onIndexChange={(photoIndex) => {
                        setPreviewIndex(photoIndex);
                    }}
                    onClose={() => {
                        setIsPreview(false);
                    }}
                />
            </PhotoProvider>
        </div>
    );
};

export default Index;
