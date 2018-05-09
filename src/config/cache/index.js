/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
 * localStorage缓存处理
**/
import { getItem , setItem } from './src/localStorage';
import { getCookie , setCookie } from './src/cookie';
export default{
  localStorage:{
    get: getItem,
    set: setItem,
  },
  cookie:{
    get:getCookie(),
    set:setCookie(),
  }
}
