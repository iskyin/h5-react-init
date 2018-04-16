/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 状态管理
import * as userInfo from '@/redux/actions/userinfo'

// 引入组件
import Header from '@/components/header/headerLogo';

/**

**/
class Discover extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      info:{
        title:'发现', // 标题
        show:{}, // 是否显示
      }
    };
  }

  render() {
    return (
      <div className='discover'>
        <Header info={this.state.info} />
        actions={this.userInfo}
      </div>
    );
  }

}
export default Discover;
