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
