/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/31
 */
var moshConfig = [{
    title: '网站',
    explain: '降低开发运维难度，提供更安全、更稳定、更适配的网站架构方案.',
    src: 'src/img/core-img/settings-2.png',
    key: 'convergedPayment'
}, {
    title: '企业互联网架构',
    explain: '高效构建大型分布式应用，推动业务需求创新，助力企业互联网+转型.',
    src: 'src/img/core-img/settings-2.png',
    key: 'convergedPayment'
}, {
    title: '数据传输',
    explain: '支持多数据源间传输，集数据迁移、订阅及实时同步于一体的解决方案.',
    src: 'src/img/core-img/settings-2.png',
    key: 'convergedPayment'
}];
// 插入头部menu、尾部导航
$('#header').html(MenuTemplate());
$('#footer').html(FootNavigationTemplate());
// 生成 行业解决方案item
$('#industrySolutionMosh').append(MoshItemTemplate(moshConfig));

