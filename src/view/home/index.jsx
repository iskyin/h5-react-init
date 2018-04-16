/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import {Link} from 'react-router';

// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 引入组件
import Header from '@/components/header/headerLogo';


/**
 * 主页
**/
class Home extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      info:{
        title:'主页', // 标题
        show:{}, // 是否显示
      }
    };
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    return (
      <div className='home'>
        <Header info={this.state.info} />
        Home
        <div className="redux">
          store : { this.store }
        </div>
      </div>
    );
  }

}
export default Home;
