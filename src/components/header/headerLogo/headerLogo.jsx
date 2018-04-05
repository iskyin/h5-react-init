import React from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin'; // 避免无效渲染

import './headerLogo.less'

class HeaderLogo extends React.Component {

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate=pureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      txt:'这是this.state'
    };
  }

  render() {
    return(
      <div className='headerLogo'>
        <div className='title'>{this.state.txt}--{this.props.info.title}</div>
        <div className='logo'>
          LENJEE
        </div>
        <div className='right'>
          <div onClick={this.toScanner.bind(this)} className='rgt scanner '></div>
          <div onClick={this.toSearchMore.bind(this)} className='rgt more '></div>
        </div>
      </div>
    )
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
