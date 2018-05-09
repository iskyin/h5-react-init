/**
 * 设置 接口地址 + 系统版本号
 * @param hostName 接口名称
 * @param AppNum 版本号
**/
export function setAppInfo(hostName,AppNum){
  let hostIP=''
  switch (hostName) {
    case 'mock': // 本地数据模拟
      hostIP='api';
    break;
    case 'dev': // 开发 服务器 地址
      hostIP='http://www.lenjee.com:9998/api';
      break;
    case 'test': // 测试 服务器 地址
      hostIP='http://www.lenjee.com:9998/api';
      break;
    case 'prod': // 生产 服务器 地址
      hostIP='http://www.lenjee.com:9998/api';
      break;
    default:
      hostIP='http://error';
  }
  // 配置 服务器地址
  window.__APPINFO__.HOST = hostIP ;
  // 版本
  window.__APPINFO__.VERSION = AppNum ;
}
