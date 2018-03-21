var devConfig=require('./webpack.config.dev.js');
var webpack=require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var sysinfo=require('./public/sysinfo/index');

devConfig.entry.app.unshift("webpack-dev-server/client?"+sysinfo.dev.HOST+sysinfo.dev.PORT);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {

   contentBase:'build/',
   publicPath: "/assets/"
   
});

server.listen(sysinfo.dev.PORT);
