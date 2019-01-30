/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/30
 */
var partnerTitleconfig = {
    title: '优质金融行业合作伙伴',
    subtitle: '合作伙伴',
    rowId: 'homePartnerTitle'
};


$('#header').html(MenuTemplate());
$('#footer').html(FootNavigationTemplate());
$('#homePartner').html(homeTitleTemplate(partnerTitleconfig));
$('#homePartnerTitle').append('            <div class="col-12">\n' +
    '                <div class="clients-logo-area d-sm-flex align-items-center justify-content-between">\n' +
    '                    <a href="#"><img src="src/img/clients-img/1.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/2.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/3.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/4.png" alt=""></a>\n' +
    '                    <a href="#"><img src="src/img/clients-img/5.png" alt=""></a>\n' +
    '                </div>\n' +
    '            </div>');

// 首页合作伙伴 插件配置
var carousel = function() {
    $('.carousel').owlCarousel({
        loop: false,
        items: 1,
        margin: 30,
        nav: false,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });
};
carousel();