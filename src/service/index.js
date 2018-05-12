/**
 * 首页涉及的接口
 */
import ApiCall from '@/config/ajax/index.js';

/**
 *
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function GetProjectList (param,callback){
  let URI ='/Portal/Invest/GetProjectList';
  return ApiCall.fetch.getBare(URI,callback);
}

/**
 *
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function GetNoAgreementCount (param,callback){
  let URI ='/Portal/Invest/GetNoAgreementCount';
  return ApiCall.fetch.getBare(URI,callback);
}
