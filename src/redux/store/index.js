/**
 * 状态管理
 * @type {[type]}
 */
// createStore 用于创建 store
// applyMiddleware对redux的dispacth方法进行封装(内部对函数进行了柯理化)
// compose 从右到左来组合多个函数
import { createStore , applyMiddleware , compose } from 'redux';
import { browserHistory } from 'react-router';
// 异步 action 中间件 支持 dispatch function ，并且可以异步调用它
import thunk from 'redux-thunk';
// 利用redux-logger打印日志
import createLogger from 'redux-logger';
// 调用日志打印方法
const loggerMiddleware = createLogger();
// 创建一个中间件集合 便于传入
const middlewareArr = [ thunk , loggerMiddleware ];
// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const enhanceStore = compose(
  applyMiddleware(...middlewareArr),
  window.devToolsExtension ? window.devToolsExtension() : undefined
)(createStore);

export default enhanceStore;
