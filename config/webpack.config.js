var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

  entry:path.resolve(__dirname,'app/index.jsx'), // 入口文件

  output:{
    filename:'bundle.js'
  },

  resolve:{ // 不用写后缀名
    extensions:['','.js','.jsx']
  },

  module:{
    loaders:[
      {test:/\.(js|jsx)$/,exclude:/node_modules/,loader:'babel'}，
      {test:/\.(less)$/,exclude:/node_modules/,loader:'skyle!css!postcss'}，
    ]
  },

  postcss:[
    require('autoprefixer') // 调用 autoprefixer 插件 ，比如给flex加前缀
  ],

  plugin:[

    // html 模板插件
    new HtmlWebpackPlugin({
      template:__dirname + '/src/public/index.html'
    }),

    // 热加载
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({
      url:'http://localhost:3331'
    }),

    // 在业务js代码中使用 __DEV__ 判断是否是dev模式（div模式下可以提示错误、测试报告等）
    new webpack.DefinePlugin({
      __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev')||'false'))
    })

  ],

  devServer:{
    colors:true, // 终端中输出结果为彩色
    historyApiFallback:true, // 不跳转
    inline:true, // 实时刷新
    hot:true, // 使用热加载插件 HotModuleReplacementPlugin
  }



}
