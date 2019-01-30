/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */

/**
 * 生成核心item 字符串模版
 * @param dataResource
 * @returns {string}
 */
function homeCoreItemInnerHTML(dataResource) {
    var DEFAULT_TEMPLATE = '';
    for (var i = 0; i < dataResource.length; i++) {
        DEFAULT_TEMPLATE += '<div class="single-more-service-area">\n' +
            '        <div class="more-service-content text-center wow fadeInUp" data-wow-delay="' + (i * 0.3 + 0.1) + 's">\n' +
            '            <img src="'+ dataResource[i].src+'" alt="">\n' +
            '            <h4>' + dataResource[i].title + '</h4>\n' +
            '            <p>' + dataResource[i].subtitle + '</p>\n' +
            '        </div>\n' +
            '    </div>';
    }
    return DEFAULT_TEMPLATE;
}

/**
 * 生成首页技术核心 模版
 * @param dataResource
 * @returns {*}
 */
function homeCoreItemTemplate(dataResource) {
    return generateTemplate(homeCoreItemInnerHTML(dataResource));
}