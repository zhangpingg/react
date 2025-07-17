/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 菜单名称-模块名称
 */

import React from 'react';

const Index = () => {
    let str = '1234abcd1234ABCD';

    // 整体匹配-高亮文本
    const wholeHighlightText = (str, keyword) => {
        const regex = new RegExp(keyword, 'ig');
        const highlightedText = str.replace(regex, (match) => {
            return `<span style='color:#f00'>${match}</span>`;
        });
        return highlightedText;
    };
    // 分词匹配（乱序）-高亮文本
    const participleHighlightText = (str, keyword) => {
        const uniqueChars = [...new Set(keyword.split(''))]; // 去重
        const pattern = uniqueChars.map((char) => `(${char})`).join('|');
        const regex = new RegExp(pattern, 'gi');
        return str.replace(regex, (match) => {
            return `<span style='color:#f00'>${match}</span>`;
        });
    };
    // 分词匹配（在字符串中匹配的时候，字符串中间可以有任意别的内容，且顺序一致）-高亮文本
    const participleSameOrderHighlightText = (str, keyword) => {
        if (!keyword || !str) return str;
        let result = '';
        let i = 0; // 指向 keyword 的指针
        const lowerKeyword = keyword.toLowerCase();
        const lowerStr = str.toLowerCase();
        for (let idx = 0; idx < str.length; idx++) {
            const char = str[idx];
            const lowerChar = lowerStr[idx];

            if (i < lowerKeyword.length && lowerChar === lowerKeyword[i]) {
                result += `<span style="color: #f00;">${char}</span>`;
                i++;
            } else {
                result += char;
            }
        }

        return i === keyword.length ? result : str;
    };

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: wholeHighlightText(str, 'ab') }}></div>
            <div dangerouslySetInnerHTML={{ __html: participleHighlightText(str, '14') }}></div>
            <div dangerouslySetInnerHTML={{ __html: participleSameOrderHighlightText(str, '14da') }}></div>
        </div>
    );
};

export default Index;
