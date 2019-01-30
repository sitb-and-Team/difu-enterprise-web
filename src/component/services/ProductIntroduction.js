/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */

/**
 * 生成 产品介绍 字符串模版
 * @param dataSource
 * @returns {string}
 */
function productIntroductionInnerHtml(dataSource) {
    var DEFAULT_HTML = '';
    for (var i = 0; i < dataSource.length; i++) {
        DEFAULT_HTML += '<section class="mosh-clients-testimonials-area section_padding_100_0">\n' +
            '    <div class="container">\n' +
            '        <div class="row">\n' +
            '            <div class="col-12">\n' +
            '                <div class="section-heading text-center">\n' +
            '                    <p>' + dataSource[i].moduleSubtitle + '</p>\n' +
            '                    <h2>' + dataSource[i].moduleTitle + '</h2>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</section>\n' +
            '<section class="service-skills-area section_padding_50">\n' +
            '    <div class="container">\n' +
            '        <div class="service-skills-content">\n' +
            '            <div class="section_padding_0_50">\n' +
            '                <p>' + dataSource[i].productSubtitle + '</p>\n' +
            '                <h2>' + dataSource[i].productTitle + '</h2>\n' +
            '            </div>\n' +
            '            <section id="polymerizationPayBox" class="mosh-more-services-area d-sm-flex clearfix">\n' +
                              homeCoreItemTemplate(dataSource[i].coreConfig) +
            '            </section>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</section>';
    }
    return DEFAULT_HTML;
}

/**
 * 返回产品介绍模版
 * @param dataSource
 * @returns {*}
 * @constructor
 */
function ProductIntroductionTemplate(dataSource) {
    return generateTemplate(productIntroductionInnerHtml(dataSource));
}