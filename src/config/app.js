/**
  初始化APP信息：
    接受参数：
      {
        serverName:'dev', // 服务器环境
        version:'00.00.0001', // 版本信息
        docWidth:750, // 设计图宽度
      }
  全局变量 __APPINFO__
**/
class InitAppInfo {

  constructor(initInfo) {

    window.__APPINFO__={
      host:'', // 接口地址
      version:'', // 系统版本号
      sysInfo:'', // 系统信息
    }

    // 把视觉稿中的px转换成rem
    this.rem(window,initInfo.docWidth);

    // 设置 接口地址 + 系统版本号
    this.setAppInfo(initInfo.serverName,initInfo.version);

    // 系统信息
    this.setAndroidOrIos();

    console.log('window -> : ',window);

  }

  // 把视觉稿中的px转换成rem
  rem(window,docW){
    /* 设计图文档宽度 */
    let docWidth = docW;

    let doc = window.document,
       docEl = doc.documentElement,
       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    let recalc = (function refreshRem () {
       let clientWidth = docEl.getBoundingClientRect().width;

       /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
       docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';

       return refreshRem;
    })();

    /* 添加倍屏标识，安卓为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
       /* 添加IOS标识 */
       doc.documentElement.classList.add('ios');
       /* IOS8以上给html添加hairline样式，以便特殊处理 */
       if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
           doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  }

  // 设置 接口地址 + 系统版本号
  setAppInfo(hostName,AppNum){
      let hostIP=''
      switch (hostName) {
        case 'dev': // 开发 服务器 地址
          hostIP='http://www.vanke.com/lms-service';
          break;
        case 'test': // 测试 服务器 地址
          hostIP='http://www.vanke.com/lms-service';
          break;
        case 'prod': // 生产 服务器 地址
          hostIP='http://www.vanke.com/lms-service';
          break;
        default:
          hostIP='http://error';
      }
      // 配置 服务器地址
      window.__APPINFO__.host = hostIP ;
      // 版本
      window.__APPINFO__.version = AppNum ;
  }

  // 系统信息
  setAndroidOrIos(){
    let u = navigator.userAgent, app = navigator.appVersion;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      //这个是安卓操作系统
      return window.__APPINFO__.sysInfo = 'Android';
    }else if(isIOS) {
      //这个是ios操作系统
      return window.__APPINFO__.sysInfo =  'IOS';
    }else {
      return window.__APPINFO__.sysInfo = 'Other';
    }
  }


}

export default InitAppInfo
