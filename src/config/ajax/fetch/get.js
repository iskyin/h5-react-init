/**
 * 对fetch的get请求进行
**/
import 'whatwg-fetch';
import 'es6-promise';
import cache from '@/util/cache';
import status from '@/config/status';

/**
 * get请求 带header内容
 * @param  {[type]} uri 接口相对地址
 * @return {[type]}     请求结果
 */
export function get(uri,callback) {
  console.log(" status ",status);

  let HTTP_HEADER=cache.localStorage.get(status.key.HTTP_HEADER)
  let URL = window.__APPINFO__.HOST + encodeURI(encodeURI(uri));

  console.log('get请求 带header内容 ： host ',window.__APPINFO__.HOST ,
                        'URL ',URL,
                        'HTTP_HEADER',HTTP_HEADER);

  if (!HTTP_HEADER) {
    console.log('HTTP_HEADER 为空 ');
    return status.code.invalid_token;
  }
  fetch(URL, {
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
    console.log('fetch返回接口 ',res);
    if(!res.ok){
      console.log('接口状态有误，错误信息: ',res);
      let rtn={
        isOk:false,
        data:'接口状态有误，错误信息: '+res,
      }
      callback(rtn);
      return;
    }
    // 处理返回结果  真正结果存储在res.body是一个ReadableStream
    res.json().then((data)=>{
      console.log('请求返回值：',data);
      let rtn={
        isOk:true,
        data:data
      }
      callback(rtn);
    });
  })
  .catch((res)=>{
    console.log("Fetch请求报错: " , err);
    let rtn={
      isOk:false,
      data:"Fetch请求报错: " + err,
    }
    callback(rtn);
    return;
  })

}

/**
 *  get请求 不带header内容
 * @param  {[type]} uri 接口相对地址
 * @return {[type]}     请求结果
 */
export function getBare(uri,callback){
  let URL = window.__APPINFO__.HOST + encodeURI(encodeURI(uri));
  console.log('get请求 不带header内容 ： host ',window.__APPINFO__.HOST , 'URL ',URL);

  fetch(URL,{
    method:'GET',
    credentials:'include',
    headers:{
      'Accept':'application/json, text/plain, */*',
    }
  })
  .then((res)=>{
    console.log('fetch返回接口 ',res);
    if(!res.ok){
      console.log('接口状态有误，错误信息: ',res);
      let rtn={
        isOK:false,
        data:'接口状态有误，错误信息: '+res,
      }
      callback(rtn);
      return;
    }
    // 处理返回结果  真正结果存储在res.body是一个ReadableStream
    res.json().then((data)=>{
      console.log('请求返回值：',data);
      let rtn={
        isOK:true,
        data:data
      }
      callback(rtn);
    });
  })
  .catch((res)=>{
    console.log("Fetch请求报错: " , err);
    let rtn={
      isOK:false,
      data:"Fetch请求报错: " + err,
    }
    callback(rtn);
    return;
  })

}
