import React from 'react';
import './headerBack.less';

class HeaderBack extends React.Component {
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
