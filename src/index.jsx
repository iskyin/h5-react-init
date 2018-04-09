import React from 'react';
import { render } from 'react-dom';

// 性能检测
import Perf from 'react-addons-perf';
if(__DEV__){
  window.Perf=Perf
}
// 路由
import RouteMap from '@/router/RouteMap';

console.log("RouteMap : ",RouteMap)
// 渲染
render(
  <RouteMap />,
  document.getElementById('root')
)
