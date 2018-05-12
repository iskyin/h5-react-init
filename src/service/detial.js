/**
 * 详情 涉及的接口
 */
import ApiCall from '@/config/ajax/index.js';

/**
 *
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function GetNoAgreementCount (param,callback){
  let URI ='/Portal/Invest/GetNoAgreementCount';
  return ApiCall.fetch.getBare(URI,callback);
}

/**
 *
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function FindCopProjectDynamicListByParams (param,callback){
  let URI ='/Portal/Invest/FindCopProjectDynamicListByParams';
  return ApiCall.fetch.getBare(URI,callback);
}

/**
 *
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function FindMoreSubscribeList (param,callback){
  let URI ='/Portal/Invest/FindMoreSubscribeList';
  return ApiCall.fetch.getBare(URI,callback);
}

/**
 *
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function FindMoreSubscribeListByParams (param,callback){
  let URI ='/Portal/Invest/FindMoreSubscribeListByParams';
  return ApiCall.fetch.getBare(URI,callback);
}
