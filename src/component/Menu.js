/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/29
 */

// 生成menu 字符串模版
function menuInnerHTML() {
    return '<header class="header_area clearfix">\n' +
        '    <div class="container-fluid h-100">\n' +
        '        <div class="row h-100">\n' +
        '            <!-- Menu Area Start -->\n' +
        '            <div class="col-12 h-100">\n' +
        '                <div class="menu_area h-100">\n' +
        '                    <nav class="navbar h-100 navbar-expand-lg align-items-center">\n' +
        '                        <!-- Logo -->\n' +
        '                        <a class="navbar-brand" href="index.html"><img src="src/img/core-img/logo.png" alt="logo"></a>\n' +
        '\n' +
        '                        <!-- Menu Area -->\n' +
        '                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>\n' +
        '\n' +
        '                        <div class="collapse navbar-collapse justify-content-end" id="mosh-navbar">\n' +
        '                            <ul class="navbar-nav animated" id="nav">\n' +
        '                                <li class="nav-item active"><a class="nav-link" href="index.html">首页</a></li>\n' +
        '                                <li class="nav-item dropdown">\n' +
        '                                    <a class="nav-link dropdown-toggle" href="#" id="moshDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>\n' +
        '                                    <div class="dropdown-menu" aria-labelledby="moshDropdown">\n' +
        '                                        <a class="dropdown-item" href="index.html">首页</a>\n' +
        '                                        <a class="dropdown-item" href="about.html">企业介绍</a>\n' +
        '                                        <a class="dropdown-item" href="services.html">产品介绍</a>\n' +
        '                                        <a class="dropdown-item" href="portfolio.html">行业解决方案</a>\n' +
        '                                        <a class="dropdown-item" href="pricing.html">产品定价</a>\n' +
        '                                        <a class="dropdown-item" href="portfolio.html">开发者中心</a>\n' +
        '                                        <a class="dropdown-item" href="blog.html">帮助中心</a>\n' +
        '                                        <a class="dropdown-item" href="blog.html">论坛</a>\n' +
        '                                        <a class="dropdown-item" href="contact.html">反馈</a>\n' +
        '                                        <div class="dropdown-divider"></div>\n' +
        '                                        <a class="dropdown-item" href="elements.html">Elements</a>\n' +
        '                                    </div>\n' +
        '                                </li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="about.html">企业介绍</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="services.html">产品介绍</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="portfolio.html">行业解决方案</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="pricing.html">产品定价</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="portfolio.html">开发者中心</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="blog.html">帮助中心</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="blog.html">论坛</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="contact.html">反馈</a></li>\n' +
        '                            </ul>\n' +
        '                            <!-- Search Form Area Start -->\n' +
        '                            <div class="search-form-area animated">\n' +
        '                                <form action="#" method="post">\n' +
        '                                    <input type="search" name="search" id="search" placeholder="Type keywords &amp; hit enter">\n' +
        '                                    <button type="submit" class="d-none"><img src="src/img/core-img/search-icon.png" alt="Search"></button>\n' +
        '                                </form>\n' +
        '                            </div>\n' +
        '                            <!-- Search btn -->\n' +
        '                            <div class="search-button">\n' +
        '                                <a href="#" id="search-btn"><img src="src/img/core-img/search-icon.png" alt="Search"></a>\n' +
        '                            </div>\n' +
        '                            <!-- Login/Register btn -->\n' +
        '                            <div class="login-register-btn">\n' +
        '                                <a href="#">登录</a>\n' +
        '                                <a href="#">/ 重置密码</a>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </nav>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</header>\n';
}

/**
 * 导出menu模版
 * @returns {*}
 * @constructor
 */
function MenuTemplate() {
    return generateTemplate(menuInnerHTML());
}