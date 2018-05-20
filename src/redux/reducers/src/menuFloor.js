let initState ={
  home:true,
  message:false,
  discover:false,
  me:false,
}

/**
 * 底部状态栏切换
 * @param {[type]} [state=initState] [初始化数据]
 * @param {[type]} action            [修改]
 */
const MenuFloor = (state=initState,action) =>{
  console.log('menu_floor state: ', state , ' action : ',action );
  let newState=Object.assign(state);
  switch(action.type){
    case 'home':
      newState=setMenuFloor(action.type);
      return newState;
    case 'message':
      newState=setMenuFloor(action.type);
      return newState;
    case "discover":
      newState=setMenuFloor(action.type);
      return newState;
    case "me":
      newState=setMenuFloor(action.type);
      return newState;
    default:
      return state;
  }
}

/**
 * 设置底部菜单
 * @param {[type]} menu [选项]
 */
const setMenuFloor=(menu)=>{
  let initMenu={
    home:false,
    message:false,
    discover:false,
    me:false,
  };
  initMenu[menu]=true;
  return initMenu;
}

export default MenuFloor;
