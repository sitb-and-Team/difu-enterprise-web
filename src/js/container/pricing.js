/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/31
 */

$('#header').html(MenuTemplate());
$('#footer').html(FootNavigationTemplate());

//  标准定价 自助充值
var pricingTypeStandardActiveConfig = {
    title: '标准定价产品（自助充值消费）',
    subtitle: '提供适合不同类型企业的支持计划，及覆盖上云前、中、后全周期的专业技术服务。',
    id: 'pricingTypeStandardActiveTitle'
};
var pricingPriceStandardActiveConfig = [{
    title: '基础支持',
    subtitle: '7x24小时云产品支持',
    explain: ['免费'],
    money: '0.00'
}, {
    title: '商业级支持计划',
    subtitle: '更快捷的支持通道',
    explain: ['基础价：500元/月', '每月阿里云产品消费0-5000（元）部分×10% + 5000-37000'],
    money: '500'
}, {
    title: '企业标准级支持计划',
    subtitle: 'IM企业群支持，配备服务经理',
    explain: ['基础价：2500元/月', '每月阿里云产品消费0-25000（元）部分×10% + 5000-37000'],
    money: '25000'
}, {
    title: '企业至尊级支持计划',
    subtitle: 'IM企业群支持，配备技术服务经理',
    explain: ['基础价：25000元/月', '每月阿里云产品消费0-250000（元）部分×10% + 5000-37000'],
    money: '50000'
}];
$('#pricingTypeStandardActive').html(homeTitleTemplate(pricingTypeStandardActiveConfig));
$('#pricingTypeStandardActiveTitle').append(PricingTemplate(pricingPriceStandardActiveConfig));

// 标准定价 协议定价
var pricingTypeStandardProtocolTitleConfig = {
    title: '标准定价产品（协议价格消费）',
    subtitle: '为企业级用户定制的资金收付管理平台，提供了高效、便捷的资金管理方案。',
    id: 'pricingTypeStandardProtocolTitle'
};
var pricingTypeStandardProtocolConfig = [{
    title: '基础支持',
    subtitle: '7x24小时云产品支持',
    explain: ['免费'],
    money: '0.00'
}, {
    title: '商业级支持计划',
    subtitle: '更快捷的支持通道',
    explain: ['基础价：500元/月', '每月阿里云产品消费0-5000（元）部分×10% + 5000-37000'],
    money: '500'
}, {
    title: '企业标准级支持计划',
    subtitle: 'IM企业群支持，配备服务经理',
    explain: ['基础价：2500元/月', '每月阿里云产品消费0-25000（元）部分×10% + 5000-37000'],
    money: '25000'
}, {
    title: '企业至尊级支持计划',
    subtitle: 'IM企业群支持，配备技术服务经理',
    explain: ['基础价：25000元/月', '每月阿里云产品消费0-250000（元）部分×10% + 5000-37000'],
    money: '50000'
}];
$('#pricingTypeStandardProtocol').html(homeTitleTemplate(pricingTypeStandardProtocolTitleConfig));
$('#pricingTypeStandardProtocolTitle').append(PricingTemplate(pricingTypeStandardProtocolConfig));

// 协议定价
var pricingTypeProtocolTitleConfig = {
    title: '协议定价产品',
    subtitle: '多层次风控体系，业内领先的A.N.T.反欺诈风险控制系统，全力保障商户资金安全。',
    id: 'pricingTypeProtocolTitle'
};
var pricingTypeProtocolConfig = [{
    title: '基础支持',
    subtitle: '7x24小时云产品支持',
    explain: ['免费'],
    money: '0.00'
}, {
    title: '商业级支持计划',
    subtitle: '更快捷的支持通道',
    explain: ['基础价：500元/月', '每月阿里云产品消费0-5000（元）部分×10% + 5000-37000'],
    money: '500'
}, {
    title: '企业标准级支持计划',
    subtitle: 'IM企业群支持，配备服务经理',
    explain: ['基础价：2500元/月', '每月阿里云产品消费0-25000（元）部分×10% + 5000-37000'],
    money: '25000'
}, {
    title: '企业至尊级支持计划',
    subtitle: 'IM企业群支持，配备技术服务经理',
    explain: ['基础价：25000元/月', '每月阿里云产品消费0-250000（元）部分×10% + 5000-37000'],
    money: '50000'
}];
$('#pricingTypeProtocol').html(homeTitleTemplate(pricingTypeProtocolTitleConfig));
$('#pricingTypeProtocolTitle').append(PricingTemplate(pricingTypeProtocolConfig));
