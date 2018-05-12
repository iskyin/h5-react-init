/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import PRMX from 'react-addons-pure-render-mixin';

import TodoInput from '@/components/input/todo';
import TodoList from '@/components/list/todo';

import "./index.less";

/**
  todo list 测试
**/
class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate=PRMX.shouldComponentUpdate.bind(this);
    this.state={
      todoArr:[]
    };
  }

  render(){
    return(
      <div className='todoInput'>
        <TodoInput submitInput={this.submitInput.bind(this)} />
        <TodoList todoArr={this.state.todoArr} deleteLi={this.deleteLi.bind(this)} />
      </div>
    );
  }

  // 添加值
  submitInput(val){
    let _id=this.state.todoArr.length;
    this.setState({
      todoArr:this.state.todoArr.concat({
        _id:_id,
        txt:val,
      })
    });
  }

  // 删除
  deleteLi(id){
    let arr=this.state.todoArr;
    this.setState({
      todoArr:arr.filter(item=>{
        if(item._id != id ){
          return item;
        }
      })
    })
  }

}
export default Todo
