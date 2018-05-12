/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 样式
import './index.less';

/**
  报错页面
**/
class Loading extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
    };
  }

  render() {
    return (
      <div className='loading'>
        <div className='load'>LOADING...</div>
      </div>
    );
  }

}
export default Loading;
