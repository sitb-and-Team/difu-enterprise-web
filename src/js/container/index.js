/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */
var partnerTitleConfig = {
    title: '优质金融行业合作伙伴',
    subtitle: '合作伙伴',
    rowId: 'homePartnerTitle'
};

var coreTitleConfig = {
    title: '海纳百川，精选全球的高品质软件与服务',
    subtitle: '开发者工具、建站、API、企业应用，支撑云端应用服务',
    id: 'homeCoreTitle'
};


$('#header').html(MenuTemplate());
$('#footer').html(FootNavigationTemplate());
$('#homePartner').html(homeTitleTemplate(partnerTitleConfig));
$('#homePartnerTitle').append('            <div class="col-12">\n' +
    '                <div class="clients-logo-area d-sm-flex align-items-center justify-content-between">\n' +
    '                    <a href="#"><img src="src/img/clients-img/1.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/2.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/3.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/4.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/5.png" alt=""></a>\n' +
    '                </div>\n' +
    '            </div>');
var coreConfig = [{
    title: '数据能力',
    subtitle: 'EB(10亿GB)级的大数,据存储和分析能力.',
    src: 'src/img/core-img/trophy.png'
}, {
    title: '调度能力',
    subtitle: '10K(单集群1万台服务器)的任务分布式部署和监控.',
    src: 'src/img/core-img/photo-camera.png'
}, {
    title: '安全能力',
    subtitle: '守护40%中国网站,为40%中国网站提供防御.',
    src: 'src/img/core-img/presentation.png'
}, {
    title: '开放的生态',
    subtitle: '兼容软件硬件,兼容大多数生态软件和硬件，比如CloudFoundry、Docker、Hadoop.',
    src: 'src/img/core-img/safebox.png'
}];
$('#homeCore').html(homeTitleTemplate(coreTitleConfig));
$('#homeCoreTitle').append('<section class="mosh-more-services-area d-sm-flex clearfix">\n' +
    homeCoreItemTemplate(coreConfig) +
    '</section>\n');

// 首页合作伙伴 插件配置
var carousel = function () {
    $('.carousel').owlCarousel({
        loop: false,
        items: 1,
        margin: 30,
        nav: false,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
};
carousel();