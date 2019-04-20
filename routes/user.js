const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空的路由器对象
var router=express.Router();
//添加路由
//1.用户注册
router.post('/checkUname',(req,res)=>{
	var obj=req.body;
	var $uname=req.body.uid;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	if($uname==""){
		res.send("用户不能为空");
		return;
	}
	if($upwd==""){
		res.send("密码不能为空");
		return;
	}

	if($email==""){
		res.send("邮箱不能为空");
		return;
	}

	if($phone==""){
		res.send("电话不能为空");
		return;
	}
	
	//执行sql语句，把数据obj插入到数据库中
	var sql="insert into xz_user set?";
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send("注册失败");
		}
	});
});	
//2.用户登录
router.get('/login',(req,res)=>{
	var $uname1=req.query.uname;
	var $upwd1=req.query.upwd;
	if($uname1==""){
		res.send("用户名不存在"); 
		return;
	}
	if($upwd1==""){
		res.send("密码不存在");
		return;
	}
	//res.send($uname+'...'+$upwd);
	//查询数据库的操作
    var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname1,$upwd1],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			//1.登陆成功
        	//2.获取用户id
        	var uid=result[0].uid;
        	//3.保存session对象中
        	req.session.uid=uid;
			res.send(result);
			//console.log(result);
		}else{
			res.send("登陆失败");
		}
	});
});
//查询用户名
router.get('/name',(req,res)=>{
	var $uid=req.query.id;
	console.log(req.session.uid);
	// console.log($uid)
    var sql="select * from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			console.log(result);
			res.send(result);
		}
	});
});

// 购物车功能
router.post('/addcart',(req,res)=>{
	// var obj=req.body;
	var $cid=null;
	var $title=null;
	var $total=req.body.total;
	var $size=req.body.size;
	var $price=req.body.price;
	//console.log($price)
	//执行sql语句，把数据obj插入到数据库中
	var sql="insert into cake_cart values(?,?,?,?,?)";
	pool.query(sql,[$cid,$title,$size,$price,$total],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send("添加失败");
		}
	});
});

// 移除单个商品
router.get('/removeProduct',(req,res)=>{
	var $cid=req.query.cid;
    var sql="delete from cake_cart where cid=?";
	pool.query(sql,[$cid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			console.log(result);
			res.send(result);
		}
	});
});
//删除多个商品
router.get("/removeMItem",(req,res)=>{
	//1.参数
	var $cid=req.query.cid;
	//2.sql
	var sql="delete from cake_cart where cid=?";
	//3.json
	pool.query(sql,[$cid],(err,result)=>{
	  if(err)throw err;
	  if(result.affectedRows>0){
		res.send({code:1,msg:"成功删除多个商品"})
	  }else{
		res.send({code:-1,msg:"删除失败"}) 
	  }
	})
  });
//导出路由器
module.exports=router; 
