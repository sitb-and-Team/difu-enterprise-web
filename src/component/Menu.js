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
        '                                <li class="nav-item"><a class="nav-link index active" href="index.html">首页</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="about.html">企业介绍</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="products.html">产品介绍</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="industrySolution.html">行业解决方案</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="pricing.html">产品定价</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="developer.html">开发者中心</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="help.html">帮助中心</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="blog.html">论坛</a></li>\n' +
        '                                <li class="nav-item"><a class="nav-link" href="contact.html">反馈</a></li>\n' +
        '                            </ul>\n' +
        '                            <!-- Login/Register btn -->\n' +
        '                            <div class="login-register-btn">\n' +
        '                                <a href="login.html">登录</a>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </nav>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</header>\n';
}

$(function () {
    var $nowHref = window.location.href.split('/').pop();
    $('.nav-link').each(function () {
        var $this = $(this);
        var $thisHref = $this.attr('href');
        if ($thisHref === $nowHref) {
            $this.addClass('active');
            $this.siblings('.nav-item').removeClass('active');
            if ($thisHref != 'index.html') {
                $('.nav-item .index').removeClass('active')
            }
        }
    });
});

/**
 * 导出menu模版
 * @returns {*}
 * @constructor
 */
function MenuTemplate() {
    return generateTemplate(menuInnerHTML());
}