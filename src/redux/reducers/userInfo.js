/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import * as actionTypes from '@/redux/contants/userInfo';
let initState = {
  txt:'******',
};
function userInfo(state=initState,action){
  switch (action.type) {
    case "UPDATE_NICKNAME": // 昵称
      return {
        txt:"昵称："+action.txt,
      };
    case "UPDATE_ADDR": // 地址
      if(action.txt=='***'){
        return this.state;
      }
      return {
        txt:"地址："+action.txt,
      };
    default:
      return state;
  }
}
export default userInfo;
