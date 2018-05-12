/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 引入组件
import Header from '@/components/header/headerLogo';
import FloorMenu from '@/components/floor/menu';

/**

**/
class Message extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      headTitle:{
        title:'信息', // 标题
        show:{}, // 是否显示
      }
    };
  }

  render() {
    return (
      <div className='message'>
        <Header info={this.state.headTitle} />
        Message
        <FloorMenu />
      </div>
    );
  }

}
export default Message;
