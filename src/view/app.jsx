/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';

// bindActionCreators函数返回的是一个对象，调用这个对象中（对应相应action）的属性，就会自动创建aciton并dispatch。
import { bindActionCreators } from 'redux'
// 引入connect函数用来生成Redux组件
import {connect} from 'react-redux';
// 引入用到的action
import * as userInfo_action from '@/redux/actions/userInfo';

console.log('userInfo_action -> : ',userInfo_action);

// 公共样式
import '@/style/common/index.less';

// 公共配置
import initAppInfo from '@/config/app';
new initAppInfo({
  serverName:'mock', // 开发环境
  version:'00.00.0001', // 版本信息
  docWidth:750, // 设计图宽度
});

// 缓存
import SetCache from '@/util/cache';

// key
import status_key from '@/config/status'

// 组件引用
import Loading from '@/components/loading/svg_circular_line';
/**
  最外层壳子
**/
class APP extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      loading:true
    };
  }

  render() {
    return (
      <div className='app'>
        {
          // this.props.userInfoStore.name
          this.state.loading
          ? <Loading/>
          : this.props.children
        }
      </div>
    );
  }

  changeName(e){
    console.log('修改姓名 -- >: ',e);
    this.props.userInfoActions.updateNameAction("lenjee");
  }



  componentDidMount(){
    let user_city=SetCache.localStorage.get(status_key.key.CITY);
    console.log('user_city : ',user_city);
    if(user_city==''|| user_city==null){
      user_city='BeiJing';
      SetCache.localStorage.set(status_key.key.CITY,user_city);
    }

    setTimeout(()=>{
      this.setState({
        loading:false
      });
    },2000);


  }

}


// 关联习惯列表的props与state，不关联的话全局的state.customList就没法作为props属性传进来
const mapStateToProps = (state) => {
    return {
      userInfoStore: state.userInfoStore
    }
}

// 这个方法是用来绑定dispatch的，这里直接在组件里调用dispatch了，所以就没有用到这个方法
const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfo_action, dispatch),
    }
}

APP = connect(
    mapStateToProps,
    mapDispatchToProps
  )(APP);

export default APP;
