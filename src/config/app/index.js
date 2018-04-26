/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.c
 * InitAppInfo 初始化APP信息
 *    接受参数：
 *    {
 *      serverName:'dev', // 服务器环境
 *      version:'00.00.0001', // 版本信息
 *      docWidth:750, // 设计图宽度
 *    }
 * 全局变量 __APPINFO__
**/
import {setRem} from './src/rem';
import {setAppInfo} from './src/version';
import {getAndroidOrIOS} from './src/platform';
class InitAppInfo {
  constructor(initInfo) {
    window.__APPINFO__={
      HOST:'', // 接口地址
      VERSION:'', // 系统版本号
      CLIENTOSTYPE:'', // 系统信息
    };
    // 把视觉稿中的px转换成rem
    setRem(window,initInfo.docWidth);
    // 设置 接口地址 + 系统版本号
    setAppInfo(initInfo.serverName,initInfo.version);
    // 获取系统信息
    getAndroidOrIOS();
    console.log('window.__APPINFO__ -> : ',window.__APPINFO__);
  }
}
export default InitAppInfo
