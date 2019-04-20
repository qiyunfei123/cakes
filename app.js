const express=require('express');
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
const  shouye=require('./routes/shouye.js');
const  cake=require('./routes/cake.js');
const shop_car=require('./routes/shop_car.js');
//创建web服务器
var server=express();
var app=server.listen(3000);
//托管静态资源到xm
server.use(express.static('xm'));
//配置中间件
server.use(bodyParser.urlencoded({
  extended:false
}));
//3.11加载模块 express-session
//并且对其配置  顺序问题
const session=require("express-session");
//3.12配置模块 
server.use(session({
  secret:"128位随机字符串",
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*60
  }
}));
//使用路由器管理路由
//把用户路由器挂载到/user下，访问形式/user/login
server.use('/user',userRouter);
server.use("/shouye",shouye);
server.use('/cake',cake);
server.use('/shop_car',shop_car);