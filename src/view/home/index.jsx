import React from 'react';
import {Link} from 'react-router';

// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';

/**

**/
class Home extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
    };
  }

  render() {
    return (
      <div className='home'>
        Home
        <Link to='/me'> 跳转到 home </Link>
      </div>
    );
  }

}
export default Home;
