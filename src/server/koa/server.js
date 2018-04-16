var app =require('koa')();
var router = require('koa-router')();
var koaBody=require('koa-body')();

router.get('/',function*(next){
  this.body='hello koa';
});

router.get('/api',function*(next){
  this.body='hello koa';
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

// 登录
router.post('/api/login',koaBody,function*(next){
  console.log('post: ',this.request.body);
  // 返回token
  this.body=JSON.stringify()
})
