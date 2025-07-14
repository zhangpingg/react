/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 菜单名称-模块名称
 */

import React from 'react';

const Index = () => {
    let str = '1234abcd1234ABCD';

    // 整体-高亮文本
    const wholeHighlightText = (str, keyword) => {
        const regex = new RegExp(keyword, 'ig');
        const highlightedText = str.replace(regex, (match) => {
            return `<span style='color:#f00'>${match}</span>`;
        });
        return highlightedText;
    };
    // 分词-高亮文本
    const participleHighlightText = (str, keyword) => {
        const uniqueChars = [...new Set(keyword.split(''))]; // 去重
        const pattern = uniqueChars.map((char) => `(${char})`).join('|');
        const regex = new RegExp(pattern, 'gi');
        return str.replace(regex, (match) => {
            return `<span style='color:#f00'>${match}</span>`;
        });
    };

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: wholeHighlightText(str, 'ab') }}></div>
            <div dangerouslySetInnerHTML={{ __html: participleHighlightText(str, '14') }}></div>
        </div>
    );
};

export default Index;
