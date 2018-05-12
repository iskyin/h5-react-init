/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import {Link} from 'react-router';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 数据请求
import { getFocus } from '@/service/index.js';
// 引入组件
import FloorMenu from '@/components/floor/menu';
import Header from '@/components/header/headerLogo';
/**
 * 主页
 */
import './index.less';
class Home extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      headTitle:{
        title:'主页', // 标题
        show:{}, // 是否显示
      },
      list:[],
    };
  }

  /**
   * 初始化数据
   * @return {[type]} [description]
   */
  dataInit(){
    let param='';
    getFocus(param,(res)=>{
      console.log('dataInit res : ',res);
      if(res.isOK){
        this.setState({
          list:res.data.list
        });
        console.log("this.state.list  : ", this.state.list )
      }
    });
  }

  componentDidMount(){
    // this.dataInit();
    console.log("home -> : ",this.props)
  }

  render() {
    // const props = this.props;
    const { store } = this.context;
    return (
      <div className='home'>
        <Header info={this.state.headTitle} />

        <div className="redux">
          store : { this.store }
        </div>
        <Link to='*'>
          <div>
            跳转 TodoList
          </div>
        </Link>
        <div className="redux">
          ------- 请求值 -------
          <ul>
            {this.state.list.map((item, index) => {
              return <li > { index }:{ item.from } </li>
            })}
          </ul>
        </div>

        <div>
        </div>

        <FloorMenu/>
      </div>
    );
  }

}
export default Home;
