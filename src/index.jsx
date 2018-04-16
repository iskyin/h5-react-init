/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import { render } from 'react-dom';
// 利用Provider可以使我们的 store 能为下面的组件所用
import { Provider } from 'react-redux';
// 引入 redux
import store from '@/redux';
// 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件
// import { syncHistoryWithStore } from 'react-router-redux';
// 创建一个增强版的history来结合store同步导航事件
//  history = syncHistoryWithStore(hashHistory, store);
// 性能检测
import Perf from 'react-addons-perf';
if(__DEV__){
  window.Perf=Perf;
}
// 路由
import Router from '@/router';
// 渲染
render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
