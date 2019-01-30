/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */

/**
 * 创建广告栏 字符串模版
 * @param dataResource 格式{url: string, subtitle:string, title: string, buttonName：string}
 * @returns {string}
 */
function footBannerInnerHtml(dataResource) {
    return '<section class="mosh-subscribe-newsletter-area bg-img bg-overlay-white section_padding_100"\n' +
        '         style="background-image: url(' + dataResource.url + ');">\n' +
        '    <div class="container">\n' +
        '        <div class="row">\n' +
        '            <div class="col-12">\n' +
        '                <div class="subscribe-newsletter-content text-center wow fadeInRightBig" data-wow-delay=".5s">\n' +
        '                    <p>' + dataResource.subtitle + '</p>\n' +
        '                    <h2>' + dataResource.title + '</h2>\n' +
        '                    <a href="contact.html" class="btn mosh-btn">' + dataResource.buttonName + '</a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>'
}

/**
 * 返回页脚  广告栏
 * @param dataResource
 * @returns {*}
 * @constructor
 */
function FootBannerTemplate(dataResource) {
    return generateTemplate(footBannerInnerHtml(dataResource));
}