/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = '';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {//dev环境config/dev.env.js中配置
	baseUrl = 'http://tlwl.o2oshangjia.cn';
    baseImgPath = '/img/';
}else{
	baseUrl = 'http://tlwl.o2oshangjia.cn';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
