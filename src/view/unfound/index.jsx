/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';

/**

**/
class Unfound extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
    };
  }

  render() {
    return (
      <div className='unfound'>
        unfound
      </div>
    );
  }

}
export default Unfound;
