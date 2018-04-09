import React from 'react';
import './index.less';
import pureRenderMixin from 'react-addons-pure-render-mixin'; // 避免无效渲染

class HeaderBack extends React.Component {
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate=pureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
    };
  }

  render() {
    return(
      <div className='headerBack'>
        <div className='back'></div>
        <div className='title'>{this.props.info.title}</div>
        <div className='more'></div>
      </div>
    )
  }
}

export default HeaderBack
