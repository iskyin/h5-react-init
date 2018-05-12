/**
 * reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、甚至是 Immutable.js 生成的数据结构。
 * 惟一的要点是当 state 变化时需要返回全新的对象，而不是修改传入的参数
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 *
 */

// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
import { combineReducers } from 'redux';
// 引入 reducer
import userInfoStore from './src/userinfo';
import menuFloorStore from './src/menuFloor';
// import home from './src/home';
// import IME from './IME';

// 合并reducer
const indexReducer=combineReducers({
  userInfoStore,
  menuFloorStore,
  // home,
  // IME,
})

export default indexReducer;
