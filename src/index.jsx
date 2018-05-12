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

// 性能检测
import Perf from 'react-addons-perf';
if(__DEV__){
  window.Perf=Perf;
}

// 路由
import Router from '@/router';

// 渲染
render(
	// 使用Provider组件包裹App组件，把store作为props传入
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
)
