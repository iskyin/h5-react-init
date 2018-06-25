/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import {Link} from 'react-router';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// bindActionCreators函数返回的是一个对象，调用这个对象中（对应相应action）的属性，就会自动创建 aciton 并 dispatch。
import { bindActionCreators } from 'redux'
// 引入connect函数用来生成Redux组件
import {connect} from 'react-redux';
// 引入用到的action
import * as menufloorAction from '@/redux/actions/menufloor';

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
        <Link onClick={this.selectedMenu.bind(this,"home")} to='/'>
          <div className='menuBtn'>
            <div className={this.props.menusStore.home ? 'menu_logo _homed':'menu_logo _home'}></div>
            <div className={this.props.menusStore.home ? 'menu_title slted':'menu_title slt'}>随记</div>
          </div>
        </Link>

        <Link onClick={this.selectedMenu.bind(this,"discover")}  to='/discover'>
          <div className='menuBtn'>
            <div className={this.props.menusStore.discover ? 'menu_logo discovered' : 'menu_logo discover'} ></div>
            <div className={this.props.menusStore.discover?'menu_title slted':'menu_title slt'}>发现</div>
          </div>
        </Link>

        <Link onClick={this.selectedMenu.bind(this,"message")} to='/message'>
          <div className='menuBtn'>
            <div className={this.props.menusStore.message ? 'menu_logo messaged' : 'menu_logo message'}></div>
            <div className={this.props.menusStore.message?'menu_title slted':'menu_title slt'}>信息</div>
          </div>
        </Link>

        <Link onClick={this.selectedMenu.bind(this,"me")} to='/me'>
          <div className='menuBtn'>
            <div className={this.props.menusStore.me ? 'menu_logo med' : 'menu_logo me'}></div>
            <div className={this.props.menusStore.me?'menu_title slted':'menu_title slt'}>我</div>
          </div>
        </Link>

      </div>
    );
  }

  selectedMenu(val,e){
    console.log("修改menus this.props.menusStore[val] -->",this.props.menusStore[val]);
    if(this.props.menusStore[val]){
      return;
    }
    this.props.menufloorAction.updateMenu(val);
  }

}

// 关联习惯列表的props与state，不关联的话全局的state.customList就没法作为props属性传进来
const mapStateToProps = (state) => {
    return {
      menusStore: state.menuFloorStore
    }
}

// 这个方法是用来绑定dispatch的，这里直接在组件里调用dispatch了，所以就没有用到这个方法
const mapDispatchToProps = (dispatch) => {
    return {
        menufloorAction: bindActionCreators(menufloorAction, dispatch),
    }
}

FloorMenu=connect(
  mapStateToProps,
  mapDispatchToProps
)(FloorMenu)

export default FloorMenu;
