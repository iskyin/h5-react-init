var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var sysinfo=require('./public/sysinfo/index');

module.exports = {

    // 入口文件
    entry: path.resolve(__dirname, 'src/index.jsx'),

    // 输出
    output: {
      filename: "bundle.js"
    },

    // 解析
    resolve:{
      extensions:['.js','.jsx'],
      alias: { // 别名配置
        '@': path.resolve(__dirname, './src'), //设置跟路径
      }
    },

    //模块
    module: {
      rules: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.css$/,exclude: /node_modules/, loader: 'style-loader!css-loader' },
          { test:/\.(png|gif|jpg|jpeg)$/, loader:'url-loader?limit=10000' },  // 限制大小5kb
      ]
    },

    // 插件
    plugins: [

      // 热加载插件
      new webpack.HotModuleReplacementPlugin(),

      // html 模板插件
      new HtmlWebpackPlugin({
        template: __dirname + '/public/template/index.html'
      }),


      // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
      }),

      // 给css自动添加前缀
      require('autoprefixer'),

    ],

    devServer: {
      port:sysinfo.dev.PORT, // 端口号
      // colors: true, // 终端中输出结果为彩色
      host: sysinfo.dev.HOST,
      historyApiFallback: true, // 不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      inline: true, // 实时刷新
      open: true, // 打开浏览器
      hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }

}
