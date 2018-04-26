/**
 * localStorage 读取
 * @param key 对象名
**/
export function getItem(key){
  let value='';
  try {
    value = localStorage.getItem(key);
  } catch (e) {
    // 开发环境下提示error
    if (__DEV__) {
      console.error('localStorage.getItem报错, ', e.message);
    }
  } finally {
    return value;
  }
}

/**
 * localStorage 设置
 * @param key 对象名
 * @param value 值
**/
export function setItem(key,value){
  try {
    // 兼容 ios 无痕模式
    localStorage.setItem(key,value);
  } catch (e) {
    // 开发环境下提示 error
    if (__DEV__) {
      console.error('localStorage.setItem报错, ', e.message);
    }
  } finally {
    console.log('记录localstorage');
  }
}
