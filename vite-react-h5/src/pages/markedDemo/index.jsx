/*
 * @Author: zhangping
 * @Date: 2026-04-27 10:56:54
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import { marked } from 'marked';
import styles from './index.module.less';

const content =
    '查询条件：  \n【时间】2025-01-01 至 2025-12-31  \n【时间维度】月  \n【规格】12R22.5（id=12R22.5）  \n【花纹】[AZ565+]（id=[AZ565+]）  \n【行-产品类别】花纹  \n【列-客户类别】科室  \n\n查询结果如下：\n\n| 科室 | 2025-01 | 2025-02 | 2025-03 | 2025-04 | 2025-05 | 2025-06 | 2025-07 | 2025-08 | 2025-09 | 2025-10 | 2025-11 | 2025-12 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 东北科 | 200 | 110 | 40 | 0 | 80 | 91 | 10 | 97 | 180 | 136 | 96 | 130 |\n| 华东科 | 1871 | 2615 | 2342 | 1726 | 2097 | 2445 | 1959 | 2581 | 2921 | 2814 | 2158 | 1945 |\n| 华北科 | 290 | 802 | 478 | 196 | 373 | 277 | 245 | 394 | 278 | 359 | 373 | 320 |\n| 南一科 | 80 | 174 | 40 | 40 | 50 | 96 | 125 | 50 | 100 | 65 | 39 | 259 |\n| 南二科 | 288 | 265 | 475 | 191 | 370 | 406 | 97 | 223 | 149 | 196 | 252 | 241 |\n| 网红 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |\n| 西北科 | 231 | 357 | 1113 | 543 | 248 | 381 | 710 | 299 | 336 | 285 | 335 | 396 |\n| 集团消费部 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |';
const Index = () => {
    // 添加表格父级的div
    const addTableFatherDiv = (htmlStr) => {
        if (!htmlStr) return '';
        return htmlStr
            .replace(/<table>/g, '<div class="tableFatherBox"><table>')
            .replace(/<\/table>/g, '</table></div>');
    };
    return (
        <div className={styles['box']}>
            <div
                dangerouslySetInnerHTML={{ __html: addTableFatherDiv(marked.parse(`${content}`)) }}
                className={styles['markdownBody']}
            ></div>
        </div>
    );
};

export default Index;
