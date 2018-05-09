# 搭建
## 从零搭建一套基于React的SPA框架
```
# 创建一个空文件夹
$ mkdir h5-react-init

# 进入目录
$ cd h5-react-init

# 初始化项目
$ npm init

# 安装 webpack
$ npm install webpack --save-dev

# 安装 React
$ npm install react react-dom --save

# 安装 babel 用于编译es6+
$ npm install --save-dev babel-loader babel-core
> webpack
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
# es6配置文件
$ npm install babel-preset-env --save-dev

# 安装 html-webpack-plugin HTML模板插件
$ npm install --save-dev html-webpack-plugin

# 安装 open-browser-webpack-plugin 打开浏览器插件
$ npm install open-browser-webpack-plugin --save-dev

# 安装  css-loader less less-loader
$ npm install css-loader less less-loader style-loader --save-dev

# 安装 webpack-dev-server --save-dev 用于启动服务
$ npm install webpack-dev-server --save-dev

# 安装 postcss 给css自动添加前缀
$ npm install postcss-loader --save-dev

# 安装 url-loader 配置图片及字体文件
$ npm install --save-dev url-loader

# 安装 eslint
$ npm install eslint eslint-loader --save-dev

# 安装 react-transform-hmr
$ npm install --save-dev react-transform-hmr

# 安装 extract-text-webpack-plugin 将css文件合并到一个文件中。
$ npm install extract-text-webpack-plugin@^2.0.0-beta.4
> 最后的beta.4是必要的

# 安装路由
$ npm install react-router --save

# 安装redux
npm install redux react-redux --save
  Redux是Flux的一种实现方法
    flux数据流向：
      -> Action:
          用户有各种各样的Action
        -> Dispacher :
            所有的Action由一个统一的Dispacher分发
          -> Store
              Dispacher分发到若干个Store里去
            -> view
              -> Action
    注意:
      一个store只能向视图层传递信息，而不允许视图层再返回来作用到Store上

  Redux数据流向:
    -> UI 层展现
      -> Action
        -> Reducer
          -> Store
            -> State
              -> UI层展现
说明：
  > actions:
    状态管理器需要做的操作
      1. 行为的抽象
      2. 普通JS对象
      3. 一般由方法生成
      4. 必须有一个type
  > reducers:
    对不同的action做出不同的操作
      1. 响应的抽象
      2. 纯方法
      3. 传入旧状态和action
      4. 返回新状态
  > store:
    管理state的单一对象
      1. action作用于store；
      2. reducer根据store响应；
      3. 对于redux来说，store是唯一的；
      4. store包括了完整的state；
      5. state完全可预测

    涉及方法:
      store.getState():
        获取state
      store.dispatch(action):
        发出操作，更新state
      store.subscribe(listener):
        监听变化，当state发生更新时，就可以在这个函数的回调中监听。

# 安装 fetch  兼容老浏览器es6-promise
$ npm install whatwg-fetch es6-promise --save
    说明:
      (1) fetch是发送ajax请求的一种解决方案，与XMLHttpRequest类似
      (2) fetch的API使用的是promise
      (3) fetch发送请求默认不会带cookie，需设置credentials: 'include'
      (4) fetch返回的是一个promise对象，只有在网络请求错误的时候才会reject,只要服务器给响应promise一定是resolve.
      (5) fetch的请求结果存储在res.body中，是个一个ReadableStream，需要将response进行JSON.parse()处理
      (6) fetch 不支持同步
      (7) fetch 不支持取消一个请求
      (8) fetch 无法查看请求的进度

```
## React 生命周期说明
```
React 生命周期分为三中状态：
  1. 初始化
  2. 更新
  3. 销毁

********** 初始化 **********
1. getDefaultProps()
  设置默认的props，也可以用dufaultProps设置组件的默认属性

2. getInitialState()
  在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props

3. componentWillMount()
  组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state

4. render()
  react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了

5. componentDidMount()
  组件渲染之后调用，只调用一次

********** 更新 **********
6. componentWillReceiveProps()
  组件初始化时不调用，组件接受新的props时调用

7. shouldComponentUpdate(nextProps, nextState)
  react性能优化非常重要的一环。
  组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

8. componentWillUpdata(nextProps, nextState)
  组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

9. render()
  组件渲染

10. componentDidUpdate()
  组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点

********** 卸载 **********

11. componentWillUnmount()
  组件将要卸载时调用，一些事件监听和定时器需要在此时清除

```

## 性能检测
> $ npm install react-addons-perf --save
```
在app.jsx添加

// 性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
  window.Perf=Perf
}

Perf.start() // 检测性能
Perf.stop() // 停止检测
Perf.printWasted() // 打印浪费性能的组件列表

```
## 接口模拟 基于koa
```
# 安装koa
$ npm install koa koa-body koa-router --save-dev

```
## React 优化方案
```
> 避免无效渲染
  react-addons-pure-render-mixin
  $ npm i react-addons-pure-render-mixin --save

  import pureRenderMixin from 'react-addons-pure-render-mixin'
  在组件的constructor中添加：
    this.shouldComponentUpdate=pureRenderMixin.shouldComponentUpdate.bind(this); // 避免无效渲染


> 优化数据
  Immutable.js （ 实现了js中“不可变数据”的概念 ）

  适用于数据结构很深的大型项目（数据结构很深的项目需考虑是否需要用此框架）

> 首屏性能优化
  静态资源的懒加载
  使用react-router中的huge-apps（它将react-router本身和webpack的require.ensure结合起来，来解决资源的懒加载）

```
