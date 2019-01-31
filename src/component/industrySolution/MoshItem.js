/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/31
 */

/**
 * 生成解决方案说明 字符串模版
 * @param dataSource    格式[{title: string; explain:string, src:string, key: string}]
 * @returns {string}
 */
function moshItemInnerHtml(dataSource) {
    var DEFAULT_TEMPLATE = '';
    for (var i = 0; i < dataSource.length; i++) {
        DEFAULT_TEMPLATE += ' <div class="single_gallery_item ' + dataSource[i].key + '">\n' +
            '                   <div class="custom-mosh-content">' + SolutionExplainTemplate(dataSource[i]) + ' </div>\n' +
            '                   <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">\n' +
            '                   <div class="port-hover-text text-center">\n' +
            '                       <a href="#">了解更多</a>\n' +
            '                   </div>\n' +
            '                   </div>\n' +
            '                 </div>';
    }
    return DEFAULT_TEMPLATE;
}

/**
 * 生成解决方案item 模版
 * @param dataSource
 * @returns {*}
 * @constructor
 */
function MoshItemTemplate(dataSource) {
    return generateTemplate(moshItemInnerHtml(dataSource));
}