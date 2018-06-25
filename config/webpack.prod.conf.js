var pkg = require('../package.json')
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * extract-text-webpack-plugin 抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
 * 其有三个参数:
 * @use 指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
 * @fallback 编译后用什么loader来提取css文件
 * @publicfile 用来覆盖项目路径,生成该css文件的文件路径
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SYS_INFO=require('./sysinfo');

module.exports = {

  // 入口文件
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
    // 将 必须的 第三方依赖（node_modules中的） 单独打包
    vendor: Object.keys(pkg.dependencies)
  },

  // 输出
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "[name].[chunkhash:8].js",
    publicPath: '/'
  },

  resolve:{
    extensions:['.js','.jsx'],
    alias: { // 别名配置
      '@': path.resolve(__dirname, '../src'), //设置跟路径
    }
  },

  module: {
    loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!less-loader'
          })
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test:/\.(png|gif|jpg|jpeg|bmp)$/i,
          loader:'url-loader?limit=5000&name=img/[name].[sha512:hash:base64:8].[ext]'
        },
        {
          test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
          loader:'url-loader?limit=5000&name=fonts/[name].[sha512:hash:base64:8].[ext]'
        }
    ]
  },

  plugins: [

    // webpack 内置的 banner-plugin 为每个 chunk 文件头部添加 banner
    new webpack.BannerPlugin("Copyright by www.lenjee.com"),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/template/index.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // webpack为每个模块指定唯一的id，通过该插件，webpack会分析和为模块按优先级排序，为最经常使用的分配一个最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
          // supresses warnings, usually from module minification
          warnings: false
        }
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[sha512:hash:base64:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    }),

  ]


}
