/**
 * 首页涉及的接口
 */
import ApiCall from '@/config/ajax/index.js';

/**
 * 获取 关注模块 信息
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function getFocus (param,callback){
  let URI ='/home/focus';
  return ApiCall.fetch.getBare(URI,callback);
}

// /**
//  * 获取 热门模块 信息
//  * @param  {[type]} param [description]
//  * @return {[type]}       [description]
//  */
// export function getHot(param){
//   let URI='/api/home/hot';
//   return ApiCall.fetch.get(URI);
// }
