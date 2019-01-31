/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/31
 */

/**
 * 产品定价 item 字符串模版
 * @param dataSource
 * @returns {string}
 */
function pricingItemInnerHtml(dataSource) {
    var DEFAULT_HTML = '';
    var pricingTypeBoxStyle = 'padding: 10px; background: #f5f5f5';
    for (var i = 0; i < dataSource.length; i++) {
        DEFAULT_HTML += '<div class="block-7" style="margin: 5px; flex: 1; max-width: 400px; min-width: 300px">\n' +
            '            <div class="text-center">\n' +
            '            <h2 class="heading" style="font-size: 15px; margin-bottom: 10px">' + dataSource[i].title + '</h2>\n' +
            '            <span class="price"><span class="number">' + dataSource[i].money + '</span>元/月</span>\n' +
            '            <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">了解更多</a>\n' +
            '            <h3 class="heading-2 mb-3">' + dataSource[i].subtitle + '</h3>\n' +
            '            <ul class="pricing-text">\n' +
                            renderPricingText(dataSource[i].explain) +
            '            </ul>\n' +
            '            </div>\n' +
            '        </div>'
    }
    return '<section class="mosh-more-services-area d-sm-flex clearfix" style="' + pricingTypeBoxStyle + '">' +
        '       <div class="row mb-5" style="justify-content: center; margin: 0; width: 100%">' + DEFAULT_HTML + '</div>' +
        '   </section>';
}

function renderPricingText(dataSource) {
    var DEFAULT_HTML = '';
    for (var i = 0; i < dataSource.length; i++) {
        DEFAULT_HTML += '<li>' + dataSource[i] + '</li>';
    }
    return DEFAULT_HTML;
}

/**
 * 生成产品定价 模版
 * @param dataSource
 * @returns {*}
 * @constructor
 */
function PricingTemplate(dataSource) {
    return generateTemplate(pricingItemInnerHtml(dataSource));
}