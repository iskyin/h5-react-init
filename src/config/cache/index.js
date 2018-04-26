/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
 * localStorage缓存处理
**/
import { getItem , setItem } from './src/localStorage';
import { getCookie , setCookie } from './src/cookie';
export default{
  localStorage:{
    get: getItem(key),
    set: setItem(key,value),
  },
  cookie:{
    get:getCookie(),
    set:setCookie(),
  }
}
