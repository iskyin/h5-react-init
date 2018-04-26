/**
 * get请求
 * @param 接口相对地址
**/
import 'whatwg-fetch';
import 'es6-promise';
import cache from '@/config/cache';
import status from '@/config/status';
export function get(uri) {
  let HTTP_HEADER=cache.localStorage.get(status.key.HTTP_HEADER)
  let URL = window.__APPINFO__.HOST + encodeURI(encodeURI(uri));


  console.log('get请求： host ',window.__APPINFO__.HOST ,
                        'uri ',uri,
                        'HTTP_HEADER',HTTP_HEADER);

  if (!HTTP_HEADER) {
    console.log('HTTP_HEADER 为空 ');
    return status.code.invalid_token;
  }
  fetch(url, {
      method: 'GET', // 请求方式
      credentials: 'include', // 强制加入凭据头
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'account':HTTP_HEADER.account,
          'version':HTTP_HEADER.version,
          'clientOSType':HTTP_HEADER.clientOSType,
          'token':HTTP_HEADER.token,
      }
  })
  .then((res)=>{
    console.log(" res.text ",res.text)
  })
  .then((res)=>{
    console.log(" res ",res);
    return res;
  })

}
