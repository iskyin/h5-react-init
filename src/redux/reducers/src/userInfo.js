
/**
 * 与用户详情 定义规则
 * @param  {[type]} [state=initState] [初始化数据]
 * @param  {[type]} action            [行为]
 * @return {[type]}                   [description]
 */

let initState={
  name:'-',
  city:'-',
  nickName:'-',
  img:'-',
}

// 这里使用ES6的语法，如果state是undefined的话，给state设置一个默认值；为什么要这样？因为reducer和store创建的时候会默认的发送初始化的action和用于检测的action；如果state是undefined，而reducer里又没有处理，直接返回了，就会在控制台里报错
const  userInfoReducer = (state=initState,action) => {

  console.log('userInfoReducer state = ', state, ' action = ', action);

  switch (action.type) {

    case "UPDATE_NICKNAME": // 修改昵称

      // 复制一份state的副本，永远不要修改state，而是返回state的一份副本

      // 返回
      return state;

    case "UPDATE_NAME": // 姓名
      console.log("UPDATE_NAME ---> ")
      // 复制一份state的副本，永远不要修改state，而是返回state的一份副本
      let newState=Object.assign(state);
      // 把新的值更新到副本中
      state.name=action.name;
      console.log("newState -> ",newState);
      return state;

    case "UPDATE_CITY": // 地址
      // 复制一份state的副本，永远不要修改state，而是返回state的一份副本

      return state;

    case "UPDATE_IMG": // 头像
      // 复制一份state的副本，永远不要修改state，而是返回state的一份副本

      return state;

    default:
      return state;

  }

}
export default userInfoReducer;
