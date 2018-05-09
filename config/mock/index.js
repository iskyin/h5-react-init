/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
 * @explain：利用koa启动一个数据 mock
**/
var app =require('koa')();
var router = require('koa-router')();
var koaBody=require('koa-body')();
var SYS_INFO=require('../sysinfo/index');
router.get('/',function*(next){
  this.body='hello koa';
});

router.get('/api',function*(next){
  this.body='hello koa';
});

// 首页信息
var homeListData = require('./src/home/focus.js')
router.get('/api/home/focus',function*(next){
  this.body = homeListData
});

// 用户信息
router.get('/api/user',function*(next){
  this.body={
      id : '100000',
      nickname :  '子伯',
      img : 'http://www.lenjee.com/public/images/common/skyin.jpg',
      addr : '深圳',
      gender : '男',
      phoneno : '18588208895',
  };
});

// 用户信息
router.get('/api/home/',function*(next){
  this.body={
      id : '100000',
      nickname :  '子伯',
      img : 'http://www.lenjee.com/public/images/common/skyin.jpg',
      addr : '深圳',
      gender : '男',
      phoneno : '18588208895',
  };
});


// 登录
router.post('/api/login',koaBody,function*(next){
  console.log('post: ',this.request.body);
  // 返回token
  var loginInfo={
    token:"sdfalsdfansdlfkasdnflasndf",
    version:'00.00.0001',
    account:'lenjee',
    clientOSType:'100019019101'
  }
  this.body=JSON.stringify(loginInfo);
})

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(SYS_INFO.dev.SERVER_PORT);
