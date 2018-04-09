import React from 'react';
import PRMX from 'react-addons-pure-render-mixin';

import './index.less';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate=PRMX.shouldComponentUpdate.bind(this);
    this.state={
      iptVal:''
    };
  }

  render(){
    return(
      <div className='todoInput'>
        <input type='text' onChange={this.changeHandler.bind(this)} onKeyUp={this.keyUpHandler.bind(this)} value={this.state.iptVal} />
      </div>
    );
  }

  changeHandler(e){
    this.setState({
      iptVal:e.target.value
    });
  }

  keyUpHandler(e){
    let val=this.state.iptVal;
    if(e.keyCode===13 && val.trim()!=''){
      this.props.submitInput(val);
      this.setState({
        iptVal:''
      });
    }
  }

}
export default TodoInput;
