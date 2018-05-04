/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import PRMX from 'react-addons-pure-render-mixin'; // 避免无效渲染

import './index.less'

/**
接收参数：
  prop:{
    info:{
      title:"", // 标题
      show:{} // 是否显示对象
    }
  }
**/
class HeaderLogo extends React.Component {
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate=PRMX.shouldComponentUpdate.bind(this);
    this.state={

    };
  }

  render() {
    return(
      <div className='headerLogo'>
        <div className='title'>{this.props.info.title}</div>
        <div className='logo'>
          我的金钱帝国
        </div>
        <div className='right'>
          <div onClick={this.toScanner.bind(this)} className='rgt scanner '></div>
          <div onClick={this.toSearchMore.bind(this)} className='rgt more '></div>
        </div>
      </div>
    );
  }

  toScanner(){
    console.log('****************');
    let txt ='toScanner  --> : ';
    console.log(this.state.txt);
    this.setState({
      txt: txt
    });
  }

  toSearchMore(){
    console.log('****************');
    let txt = 'toSearchMore --> : ';
    this.setState({
      txt: txt
    });
  }


}
export default HeaderLogo
