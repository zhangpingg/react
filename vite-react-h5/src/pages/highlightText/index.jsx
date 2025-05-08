/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 菜单名称-模块名称
 */

import React from 'react';

const Index = () => {
    let str = '1234abcd1234ABCD';

    // 高亮文本
    const highlightText = (str, keyword) => {
        const regex = new RegExp(keyword, 'ig');
        const highlightedText = str.replace(regex, (match) => {
            return `<span style='color:#f00'>${match}</span>`;
        });
        return highlightedText;
    };

    return (
        <div>
            <span dangerouslySetInnerHTML={{ __html: highlightText(str, 'ab') }}></span>
        </div>
    );
};

export default Index;
