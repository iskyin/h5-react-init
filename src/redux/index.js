/**
 * store配置
 */
import createStore from '@/redux/store';
// reducers集合
import reducerObj from '@/redux/reducers';
// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
console.log('reducerObj ',reducerObj)

let indexReducer ={...reducerObj}
// 创建一个全局store用来保存全局状态
const store = createStore(
  combineReducers({
    ...reducerObj,
    routing:routerReducer
  })
);

// 循环显示总的state，这个主要是为了方便在控制台看store中的state
window.GetTotalState=function(){
  console.log('*-*-*-*-* rudex total state *-*-*-*-*');
  console.log(store.getState());
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
}

export default store;
