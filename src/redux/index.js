/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/

/**
 * store配置
 * 
 */
import { createStore } from 'redux';

// reducers集合
import indexReducer from '@/redux/reducers';

// 创建一个全局store用来保存全局状态
const store = createStore(indexReducer);

// 循环显示总的state，这个主要是为了方便在控制台看store中的state
window.GetTotalState=function(){
  console.log('*-*-*-*-* rudex total state *-*-*-*-*');
  console.log(store.getState());
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
}

export default store;
