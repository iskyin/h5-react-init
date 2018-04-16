/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/

//store配置
import configStore from '@/redux/store';
// reducers集合
import reducer from '@/redux/reducers';
// 给增强后的store传入reducer
const store=configStore(reducer);
console.log("redux -> store : ",store);
export default store;
