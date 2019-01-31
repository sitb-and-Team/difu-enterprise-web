/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/31
 */

/**
 * 生成解决方案说明 字符串模版
 * @param dataSource    格式{title: string; explain:string, src: string}
 * @returns {string}
 */
function solutionExplainInnerHtml(dataSource) {
    return '            <div class="single-feature-area d-flex">\n' +
        '                    <div class="feature-icon mr-30">\n' +
        '                        <img src="' + dataSource.src + '" alt="">\n' +
        '                    </div>\n' +
        '                    <div class="feature-content">\n' +
        '                        <h5>' + dataSource.title + '</h5>\n' +
        '                        <p>' + dataSource.explain + '</p>\n' +
        '                    </div>\n' +
        '                </div>';
}

/**
 * 生成解决方案 模版
 * @param dataSource
 * @returns {*}
 * @constructor
 */
function SolutionExplainTemplate(dataSource) {
    return generateTemplate(solutionExplainInnerHtml(dataSource));
}