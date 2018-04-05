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

## React 优化方案
### 方法一： react-addons-pure-render-mixin 避免无效渲染
> $ npm i react-addons-pure-render-mixin --save
```
import pureRenderMixin from 'react-addons-pure-render-mixin'

在组件的constructor中添加：
  this.shouldComponentUpdate=pureRenderMixin.shouldComponentUpdate.bind(this); // 避免无效渲染

```
### 方法二： Immutable.js 优化数据
> Immutable 实现了js中“不可变数据”的概念
```
  适用于数据结构很深的大型项目（数据结构很深的项目需考虑是否需要用此框架）
```
