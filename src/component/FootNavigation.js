/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */

// 底部导航 字符串模版
function footNavigationInnerHTML() {
    var year = new Date().getFullYear();
    return '<footer class="footer-area clearfix">\n' +
        '    <!-- Top Fotter Area -->\n' +
        '    <div class="top-footer-area section_padding_100_0">\n' +
        '        <div class="container">\n' +
        '            <div class="row">\n' +
        '                <div class="col-12 col-sm-6 col-lg-2">\n' +
        '                    <div class="single-footer-widget mb-100">\n' +
        '                        <a href="#" class="mb-50 d-block"><img src="src/img/core-img/logo.png" alt=""></a>\n' +
        '                        <p>我们有最好的产品和专业的销售和技术团队，在公司发展壮大的1年里，我们为客户提供最好的产品、良好的技术支持、健全的售后服务。</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-12 col-sm-6 col-lg-2">\n' +
        '                    <div class="single-footer-widget mb-100">\n' +
        '                        <h5>产品列表</h5>\n' +
        '                        <ul>\n' +
        '                            <li><a href="#">账户管理</a></li>\n' +
        '                            <li><a href="#">购物指南</a></li>\n' +
        '                            <li><a href="#">订单操作</a></li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-12 col-sm-6 col-lg-2">\n' +
        '                    <div class="single-footer-widget mb-100">\n' +
        '                        <h5>文档&技术支持</h5>\n' +
        '                        <ul>\n' +
        '                            <li><a href="#">开发者中心</a></li>\n' +
        '                            <li><a href="#">开发指南</a></li>\n' +
        '                            <li><a href="#">接口&技术文档</a></li>\n' +
        '                            <li><a href="#">下载</a></li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-12 col-sm-6 col-lg-2">\n' +
        '                    <div class="single-footer-widget mb-100">\n' +
        '                        <h5>公司情况</h5>\n' +
        '                        <ul>\n' +
        '                            <li><a href="#">关于我们</a></li>\n' +
        '                            <li><a href="#">联系我们</a></li>\n' +
        '                            <li><a href="#">招聘</a></li>\n' +
        '                            <li><a href="#">合作</a></li>\n' +
        '                            <li><a href="#">免责条款</a></li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-12 col-sm-6 col-lg-2">\n' +
        '                    <div class="single-footer-widget mb-100">\n' +
        '                        <h5>帮助中心</h5>\n' +
        '                        <ul>\n' +
        '                            <li><a href="#">搜索</a></li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-12 col-sm-6 col-lg-2">\n' +
        '                    <div class="single-footer-widget mb-100">\n' +
        '                        <h5>联系我们</h5>\n' +
        '                        <div class="footer-single-contact-info d-flex">\n' +
        '                            <div class="contact-icon">\n' +
        '                                <img src="src/img/core-img/map.png" alt="">\n' +
        '                            </div>\n' +
        '                            <p>上海市 浦东新区 芳华路 陆家嘴互联网创新基地 A栋139号101室</p>\n' +
        '                        </div>\n' +
        '                        <div class="footer-single-contact-info d-flex">\n' +
        '                            <div class="contact-icon">\n' +
        '                                <img src="src/img/core-img/call.png" alt="">\n' +
        '                            </div>\n' +
        '                            <p>400-059-1990</p>\n' +
        '                        </div>\n' +
        '                        <div class="footer-single-contact-info d-flex">\n' +
        '                            <div class="contact-icon">\n' +
        '                                <img src="src/img/core-img/message.png" alt="">\n' +
        '                            </div>\n' +
        '                            <p>hjf@shangfudata.com</p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <!-- Fotter Bottom Area -->\n' +
        '    <div class="footer-bottom-area">\n' +
        '        <div class="container h-100">\n' +
        '            <div class="row h-100">\n' +
        '                <div class="col-12 h-100">\n' +
        '                    <div class="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">\n' +
        '                        <div class="copyright-text">\n' +
        '                            <p><!-- Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0. -->\n' +
        '                                Copyright &copy;\n' + year + ', Smartisan Digital Co., Ltd. All Rights Reserved. 上海迪付金融有限公司\n' +
        '                                <!-- Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0. -->\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</footer>\n'
}

/**
 * 生成 底部导航模版
 * @returns {*}
 * @constructor
 */
function FootNavigationTemplate() {
    return generateTemplate(footNavigationInnerHTML())
}