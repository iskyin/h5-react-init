/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
import PRMX from 'react-addons-pure-render-mixin';

import './index.less';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate=PRMX.shouldComponentUpdate.bind(this);
  }

  render(){
    console.log("render : ",this.props.todoArr)
    return(
      <div className='todoList'>
        <ul>
            {
              this.props.todoArr.map((item,index)=>{
                return <li data-_id={item._id} onClick={this.toDeleteLi.bind(this)}>{item.txt}</li>
              })
            }
        </ul>
      </div>
    );
  }


  toDeleteLi(e){
    let _id=e.target.dataset._id;
    this.props.deleteLi(_id);
  }

}
export default TodoList;
