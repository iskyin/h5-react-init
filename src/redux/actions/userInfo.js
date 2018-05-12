/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/

/**
 * 修改 姓名
 * @param  {[type]} data [传入参数]
 * @return {[type]}      [description]
 */
export function updateNameAction(name){
  return{
    type:"UPDATE_NAME",
    name
  }
}

/**
 * 修改 昵称
 * @param  {[type]} data [传入参数]
 * @return {[type]}      [description]
 */
export function updateNickNameAction(nick_name){
  return{
    type:"UPDATE_NICKNAME",
    nick_name
  }
}

/**
 * 修改 昵称
 * @param  {[type]} data [传入参数]
 * @return {[type]}      [description]
 */
export function updateCityAction(city){
  return{
    type:"UPDATE_CITY",
    city
  }
}

/**
 * 修改 头像
 * @param  {[type]} data [传入参数]
 * @return {[type]}      [description]
 */
export function updateImgAction(img){
  return{
    type:"UPDATE_IMG",
    img
  }
}