/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import {Link} from 'react-router';

// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';

/**

**/
class Login extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
    };
  }

  render() {
    return (
      <div className='login'>
        Login
        <Link to='/'> 跳转到 home </Link>
      </div>
    );
  }


}
export default Login;
