/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
 * @explain：利用koa启动一个数据 mock
**/
var app =require('koa')();
var router = require('koa-router')();
var koaBody=require('koa-body')();
var SYS_INFO=require('../sysinfo/index');

// 首页
// https://gt/Portal/Invest/Project?type=1
router.get('/Portal/Invest/Project',function*(next){
  this.body='首页';
});
// ------------ api ------------
// https://gt/Portal/Invest/GetProjectList
router.get('/Portal/Invest/GetProjectList',function*(next){
  this.body=require('./src/index/GetNoAgreementCount.js');
});
// https://gt/Portal/Invest/GetNoAgreementCount
router.get('/Portal/Invest/GetNoAgreementCount',function*(next){
  this.body=require('./src/index/GetNoAgreementCount.js');
});

// 详情页
// https://gt/Portal/Invest/ProjectView?projectID=184ne0hriwgs980ufnn3vefhkxtrpl72
router.get('/Portal/Invest/ProjectView',function*(next){
  this.body='详情页';
});
// ------------ api ------------
// https://gt/Portal/Invest/GetNoAgreementCount
router.get('/Portal/Invest/GetNoAgreementCount',function*(next){
  this.body=require('./src/detail/GetNoAgreementCount.js');
});
// https://gt/Portal/Invest/FindCopProjectDynamicListByParams
router.get('/Portal/Invest/FindCopProjectDynamicListByParams',function*(next){
  this.body=require('./src/detail/FindCopProjectDynamicListByParams.js');
});
// https://gt/Portal/Invest/FindMoreSubscribeList
router.get('/Portal/Invest/FindMoreSubscribeList',function*(next){
  this.body=require('./src/detail/FindMoreSubscribeList.js');
});
// https://gt/Portal/Invest/FindMoreSubscribeListByParams
router.get('/Portal/Invest/FindMoreSubscribeListByParams',function*(next){
  this.body=require('./src/detail/FindMoreSubscribeListByParams.js');
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
