/**
 * 接口地址:
 *  /lms-service/user/login
 * 请求参数:
 *  account	String	是	登录账号,如: v_zhangsan
 *  password	String	是	登录密码,如: 123456
 *
 */
 module.exports = {
   "state": {
       "errCode": 10000,
       "errMsg": "访问成功",
       "errInfo": "",
       "timestamp": 1483683585
   },
   "body": {
      userId:"18588208895", //		String	员工id  8位
      account:"lenjee", //		String	登录账号，用于用户登录。
      userName:"子伯", //		String	姓名
      userPhoto	:"http://www.lenjee.com/public/images/common/skyin.jpg", //	String	头像
      userArea:"GD-SZ", //		String	所属区域
      isAdmin	:"true", //	Boolean	是否为管理员 true-是 false-不是
      token	:"ZjUzY2U0Yjg4MzI4ZjE3OTM2ZjBmMzFlOTIwNDUyZGQ=", //	String	请求api的唯一token
      userType:"P", //		String	员工类型  P内部 H外部
      userAreaId:"100000000101", //		String	所属区域ID
      mobile:"18588208895", //		String	手机号
      email	:"lenjee@outlook.com", //	String	邮箱
   }
}
