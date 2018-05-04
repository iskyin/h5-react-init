/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
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
      sltMenu:{
        home:true,
        message:false,
        discover:false,
        me:false,
      },
    };
  }
  render() {
    return (
      <div className='floorMenu'>

        <Link to='/'>
          <div onClick={this.selectedMenu.bind(this,"home")}  className='menuBtn'>
            <div className={this.state.sltMenu.home ? 'menu_logo homed' : 'menu_logo home'}></div>
            <div className={this.state.sltMenu.home?'menu_title slted':'menu_title slt'}>币圈</div>
          </div>
        </Link>

        <Link onClick={this.selectedMenu.bind(this,"discover")}  to='/discover'>
          <div className='menuBtn'>
            <div className={this.state.sltMenu.discover ? 'menu_logo discovered' : 'menu_logo discover'} ></div>
            <div className={this.state.sltMenu.discover?'menu_title slted':'menu_title slt'}>发现</div>
          </div>
        </Link>

        <Link to='/message'>
          <div onClick={this.selectedMenu.bind(this,"message")}  className='menuBtn'>
            <div className={this.state.sltMenu.message ? 'menu_logo messaged' : 'menu_logo message'}></div>
            <div className={this.state.sltMenu.message?'menu_title slted':'menu_title slt'}>信息</div>
          </div>
        </Link>



        <Link onClick={this.selectedMenu.bind(this,"me")} to='/me'>
          <div className='menuBtn'>
            <div className={this.state.sltMenu.me ? 'menu_logo med' : 'menu_logo me'}></div>
            <div className={this.state.sltMenu.me?'menu_title slted':'menu_title slt'}>我</div>
          </div>
        </Link>

      </div>
    );
  }

  selectedMenu(val,e){
    if(this.state.sltMenu[val]){
      return;
    }
    let menu={
      home:false,
      message:false,
      discover:false,
      me:false,
    };
    menu[val]=true;
    this.setState({
      sltMenu:menu
    });
  }



}
export default FloorMenu;
