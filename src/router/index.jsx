/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import  { Router, Route, IndexRoute } from 'react-router';
// 路由的切换由URL的hash变化决定，即URL的#部分发生变化
import { hashHistory } from 'react-router';
// 页面
import APP from '@/view/app';
import Discover from '@/view/discover';
import Home from '@/view/home';
import Login from '@/view/login';
import Me from '@/view/me';
import Message from '@/view/message';
import Unfound from '@/view/unfound';
// 配置路由
class RouteMap extends React.Component {
  updateHandle(){
    console.log('路由变更 -->  ');
    console.log('刷新页面逻辑需要处理  -->  页面刷新底部banner会重新刷新为主页');
  }
  render(){
    return(
      <Router history={hashHistory} onUpdate={this.updateHandle.bind(this)}>
        <Route  path="/" component={APP}>
          <IndexRoute component={Home} />
          <Route path="discover" component={Discover} />
          <Route path="login" component={Login} />
          <Route path="me" component={Me} />
          <Route path="message" component={Message} />
          <Route path="*" component={Unfound} />
        </Route>
      </Router>
    )
  }
}
export default RouteMap;
