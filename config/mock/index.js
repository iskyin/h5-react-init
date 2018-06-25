/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
 * @explain：利用koa启动一个数据 mock
**/
// 导入koa，与koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa=require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 端口号
const SYS_INFO=require('../sysinfo/index');

// log request URL:
app.use(
  /**
   * [description]
   * @param  {[type]}   ctx
   *    [参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response]
   * @param  {Function} next
   *    [next是koa传入的将要处理的下一个异步函数]
   * @return {Promise}
   *    []
   */
  async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
  }
);

router.get('/',async(ctx,next)=>{
  ctx.response.body=`<h1> 首页 </h1>`;
  await next();
});

// 登录
router.get('/test',async (ctx, next) => {
  console.log('test: ',ctx.request);
  // 返回token
  var loginInfo={
    token:"sdfalsdfansdlfkasdnflasndf",
    version:'00.00.0001',
    account:'lenjee',
    clientOSType:'100019019101'
  }
  ctx.response.body=JSON.stringify(loginInfo);
  await next();
})

router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
  await next();
});

// 首页
// https://gt/Portal/Invest/Project?type=1
router.get('/Portal/Invest/Project',async (ctx, next) => {
  this.body='首页';
    await next();
});

// ------------ api ------------
// https://gt/Portal/Invest/GetProjectList
router.get('/Portal/Invest/GetProjectList',async (ctx, next) => {
  this.body=require('./src/index/GetNoAgreementCount.js');
    await next();
});
// https://gt/Portal/Invest/GetNoAgreementCount
router.get('/Portal/Invest/GetNoAgreementCount',async (ctx, next) => {
  this.body=require('./src/index/GetNoAgreementCount.js');
    await next();
});

// 详情页
router.get('/Portal/Invest/ProjectView',async (ctx, next) => {
  this.body='详情页';
    await next();
});
// ------------ api ------------
// https://gt/Portal/Invest/GetNoAgreementCount
router.get('/Portal/Invest/GetNoAgreementCount',async (ctx, next) => {
  this.body=require('./src/detail/GetNoAgreementCount.js');
    await next();
});
// https://gt/Portal/Invest/FindCopProjectDynamicListByParams
router.get('/Portal/Invest/FindCopProjectDynamicListByParams',async (ctx, next) => {
  this.body=require('./src/detail/FindCopProjectDynamicListByParams.js');
    await next();
});
// https://gt/Portal/Invest/FindMoreSubscribeList
router.get('/Portal/Invest/FindMoreSubscribeList',async (ctx, next) => {
  this.body=require('./src/detail/FindMoreSubscribeList.js');
    await next();
});
// https://gt/Portal/Invest/FindMoreSubscribeListByParams
router.get('/Portal/Invest/FindMoreSubscribeListByParams',async (ctx, next) => {
  this.body=require('./src/detail/FindMoreSubscribeListByParams.js');
    await next();
});

// 登录
router.post('/api/login',async (ctx, next) => {
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

// add router middleware:
app.use(router.routes());
// 在端口3000监听:
app.listen(SYS_INFO.dev.SERVER_PORT);
console.log('app started at port '+ SYS_INFO.dev.SERVER_PORT +'...');
