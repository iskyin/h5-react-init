/**
 * 底部状态栏切换
 * @param {[type]} state  [初始化state]
 * @param {[type]} action [description]
 */
let initState ={
  home:true,
  message:false,
  discover:false,
  me:false,
}
const MenuFloor = (state=initState,action) =>{
  console.log('menu_floor state: ', state , ' action : ',action );
  switch(action.type){
    case 'home':
      state=setMenuFloor(action.type);
      return state;
    case 'message':
      state=setMenuFloor(action.type);
      return state;
    case "discover":
      state=setMenuFloor(action.type);
      return state;
    case "me":
      state=setMenuFloor(action.type);
      return state;
    default:
      return state;
  }

}

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
