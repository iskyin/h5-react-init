import React from 'react';
import { render } from 'react-dom';

// 性能检测
import Perf from 'react-addons-perf';
if(__DEV__){
  window.Perf=Perf
}

// 公共样式
import '@/style/common/index.less';

// 公共配置
import InitAppInfo from '@/config/app.js';
new InitAppInfo({
  serverName:'dev', // 开发环境
  version:'00.00.0001', // 版本信息
  docWidth:750, // 设计图宽度
});

import HeaderBack from '@/components/header/headerBack/headerBack';
import HeaderLogo from '@/components/header/headerLogo/headerLogo';


class APP extends React.Component {

  constructor(props,context){
    super(props,context);
    this.state={
      now:Date.now(),
      headerInfo:{
        title:'登录页登录页登录页登录页登录页登录页登录页登录页',
        show:{},
      },
      arrNum:[0,1,2,3,4,5,6,7,8,9],
    }
  }

  render() {
    return (
      <div className='test'>
        <HeaderBack info={this.state.headerInfo}  />
        {
          this.state.arrNum.map(function(item,index){
            return <p key={index} > The number is  {item}</p>
          })
        }
        <HeaderLogo info={this.state.headerInfo}  />
      </div>
    )
  }

  componentDidMount(){
    console.log("---------- componentDidMount ----------");
    console.log('组件 渲染完成 的钩子函数，一般用于获取网络数据。');
  }

  shouldComponentUpdate(){
    console.log("---------- shouldComponentUpdate ----------");
    console.log('组件 触发的钩子函数，主要用于性能优化');
  }

  componentDidUpdate(){
    console.log("---------- componentDidUpdate ----------");
    console.log('组件 更新之后 触发的钩子函数，一般用于清空并更新数据');
  }

  componentWillUnmount(){
    console.log("---------- componentWillUnmount ----------");
    console.log('组件 销毁之前 触发的钩子函数，一般用于清理一些setTimeout等特殊事件');
  }



}

render(
  <APP/>,
  document.getElementById('root')
)
