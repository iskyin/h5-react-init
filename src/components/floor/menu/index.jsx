import React from 'react';
import {Link} from 'react-router';

// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';

/**
  底部菜单组件
**/
import './index.less';
class FloorMenu extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
    };
  }

  render() {
    return (
      <div className='floorMenu'>
        <Link to='/'>
          <div className='menuBtn'>
            <div></div>
            <div>首页</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='menuBtn'>
            <div></div>
            <div>信息</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='menuBtn'>
            <div></div>
            <div>发现</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='menuBtn'>
            <div></div>
            <div>我</div>
          </div>
        </Link>
      </div>
    );
  }

}
export default FloorMenu;
