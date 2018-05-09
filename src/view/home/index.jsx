/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import {Link} from 'react-router';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 引入组件
import Header from '@/components/header/headerLogo';

// 数据请求
import { getFocus } from '@/service/home.js';

/**
 * 主页
 */
class Home extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      info:{
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
    this.dataInit();
  }

  render() {
    // const props = this.props;
    const { store } = this.context;
    return (
      <div className='home'>
        <Header info={this.state.info} />
        <div className="redux">
          store : { this.store }
        </div>

        <div className="redux">
          ------- 请求值 -------
          <ul>
            {this.state.list.map((item, index) => {
              return <li > { index }:{ item.from } </li>
            })}
          </ul>
        </div>
      </div>
    );
  }

}
export default Home;
