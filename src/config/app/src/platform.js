/**
 * setAndroidOrIos 系统信息
**/
export function getAndroidOrIOS(){
  let u = navigator.userAgent, app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    //这个是安卓操作系统
    return window.__APPINFO__.CLIENTOSTYPE = 'Android';
  }else if(isIOS) {
    //这个是ios操作系统
    return window.__APPINFO__.CLIENTOSTYPE =  'IOS';
  }else {
    return window.__APPINFO__.CLIENTOSTYPE = 'Other';
  }
}
