/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/31
 */
var moshConfig = [{
    title: '网站',
    explain: '降低开发运维难度，提供更安全、更稳定、更适配的网站架构方案.',
    src: 'src/img/core-img/settings-2.png',
    key: 'currency'
}, {
    title: '企业互联网架构',
    explain: '高效构建大型分布式应用，推动业务需求创新，助力企业互联网+转型.',
    src: 'src/img/core-img/settings-2.png',
    key: 'currency'
}, {
    title: '数据传输',
    explain: '支持多数据源间传输，集数据迁移、订阅及实时同步于一体的解决方案.',
    src: 'src/img/core-img/settings-2.png',
    key: 'currency'
}, {
    title: '便民支付',
    explain: '迪付社区便民支付服务平台，是迪付远程自助银行中间业务系统，通过安装在社区商铺中的迪付终端，实现自助银行、缴费、生活服务.',
    src: 'src/img/core-img/settings-2.png',
    key: 'transaction'
}, {
    title: '移动支付',
    explain: '迪付移动支付在传统的支付业务基础上进行移动端的产品开发,提高交易效率，打造移动支付新生活.',
    src: 'src/img/core-img/settings-2.png',
    key: 'transaction'
}, {
    title: 'POS收单',
    explain: '迪付商户收单业务是我国专业化的收单服务、增值服务和行业解决方案；致力于为商户提供专业化与全方位的收单服务，全面满足国内、外银行卡的刷卡需要.',
    src: 'src/img/core-img/settings-2.png',
    key: 'transaction'
}, {
    title: '跨境支付',
    explain: '针对跨境交易电子商务平台的外币、人民币跨境支付结算解决方案，以及针对境内交易电子商务平台的支付结算解决方案.',
    src: 'src/img/core-img/settings-2.png',
    key: 'transaction'
}, {
    title: '聚合支付',
    explain: '专为中小微商户打造的线下扫码便捷收款方式，低零成本一站式解决门店移动支付需求。每个门店有自己单独Q码，手机上微信公众号查看收款结果。.',
    src: 'src/img/core-img/settings-2.png',
    key: 'transaction'
}, {
    title: '航旅行业',
    explain: '深入了解航空公司、票务代理、旅行社、OTA、酒店、租车、机场、TMC、邮轮汽车、景点门票等行业特性，解决商家痛点.',
    src: 'src/img/core-img/settings-2.png',
    key: 'industry'
}, {
    title: '教育行业',
    explain: '针对培训机构、行政考务、高等院校等细分行业商户，量身定制支付解决方案，确保支付安全、便捷的同时，满足不同商户个性化支付需求。',
    src: 'src/img/core-img/settings-2.png',
    key: 'industry'
}, {
    title: '电信行业',
    explain: '针对代理商、MINI营业厅、运营商资金管理等提供专业化、定制化、个性化的支付解决方案，提供放心、省心、贴心的交易服务体验',
    src: 'src/img/core-img/settings-2.png',
    key: 'industry'
}, {
    title: '保险行业',
    explain: '为保险行业客户提供与行业需求相结合的定制服务，提供综合的线上、线下支付与资金管理,一对一专业方案咨询、技术接入服务以及大客户SVIP专人服务',
    src: 'src/img/core-img/settings-2.png',
    key: 'industry'
}, {
    title: '游戏行业',
    explain: '游戏娱乐行业，一直是迪付支付重点开拓并市场占有率很高的行业。有成熟的游戏，社区，电商行业支付解决方案。给商家创造交易，实现共赢.',
    src: 'src/img/core-img/settings-2.png',
    key: 'industry'
}, {
    title: '新零售行业',
    explain: '专为平台型商户设计整体解决方案: 该产品基于账户合规，解决b2b2c的资金处理。前端实现低成本的全网收单，中端实现分账及资金处理，后端实现信用增值.',
    src: 'src/img/core-img/settings-2.png',
    key: 'industry'
}, {
    title: '网络与通信安全',
    explain: '关键网络节点处检测、防止或限制从外部发起的网络攻击行为,提供通信传输、边界防护、入侵防范等安全机制.',
    src: 'src/img/core-img/settings-2.png',
    key: 'safety'
}, {
    title: '设备与计算安全',
    explain: '对用户进行身份鉴别、访问控制、安全审计.',
    src: 'src/img/core-img/settings-2.png',
    key: 'safety'
}, {
    title: '应用和数据安全',
    explain: '对网络中发生的各类安全事件进行识别、报警和分析.',
    src: 'src/img/core-img/settings-2.png',
    key: 'safety'
}, {
    title: '安全管理策略',
    explain: '设置安全策略，包括定义访问路径、选择安全组件.',
    src: 'src/img/core-img/settings-2.png',
    key: 'safety'
}];
// 插入头部menu、尾部导航
$('#header').html(MenuTemplate());
$('#footer').html(FootNavigationTemplate());
// 生成 行业解决方案item
$('#industrySolutionMosh').append(MoshItemTemplate(moshConfig));

