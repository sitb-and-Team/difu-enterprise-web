/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */

/**
 * 生成标题 字符串模版
 * @param dataResource
 * @returns {string}
 */
function homeTitleInnerHTML(dataResource) {
    return '<section id="' + dataResource.id + '" class="mosh-portfolio-area section_padding_100 clearfix">\n' +
        '    <div class="container">\n' +
        '        <div id="'+ dataResource.rowId +'" class="row">\n' +
        '            <div class="col-12">\n' +
        '                <div class="section-heading text-center">\n' +
        '                    <p>' + dataResource.subtitle + '</p>\n' +
        '                    <h2>' + dataResource.title + '</h2>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>';
}

/**
 * 生成首页表单模版
 * @param dataResource
 * @returns {*}
 */
function homeTitleTemplate(dataResource) {
    return generateTemplate(homeTitleInnerHTML(dataResource));
}