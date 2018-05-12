/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
// 引入redux的 createStore、中间件及compose
import {createStore, applyMiddleware, compose} from 'redux';
// 中间件 redux-thunk 支持dispatch function，并且可以异步调用它
import thunk from 'redux-thunk';
// 利用redux-logger打印日志
import createLogger from 'redux-logger';
// 调用日志打印方法
const loggerMiddleware = createLogger();
// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware];

/**
 * 用 localstorage 保存最后一次state
 *  lastInfo:{
 *    url:'', // 路由
 *    state:{}, // 最后一次的State
 *  }
**/

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const enhanceStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : p => p
)(createStore);

export default enhanceStore;
