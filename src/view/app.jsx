/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';

// 公共样式
import '@/style/common/index.less';

// 公共配置
import InitAppInfo from '@/config/app';
new InitAppInfo({
  serverName:'mock', // 开发环境
  version:'00.00.0001', // 版本信息
  docWidth:750, // 设计图宽度
});

// 组件引用
import FloorMenu from '@/components/floor/menu';
import Todo       from '@/view/todo';

/**
  最外层壳子
**/
class APP extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={};
  }

  render() {
    return (
      <div className='app'>
        {this.props.children}
        <FloorMenu />
      </div>
    );
  }


}
export default APP;
