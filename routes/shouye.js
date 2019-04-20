const express=require("express");
const router=express.Router();
const pool=require("../pool");
//http://localhost:3000/index
router.get("/",(req,res)=>{
  var sql="select * from xz_shouye_one";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    //包含了
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  });
});
router.get("/two",(req,res)=>{
  var sql="select * from xz_shouye_two";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    //包含了
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  });
});
router.get("/caketit",(req,res)=>{
  var sql="select * from xz_shouye_caketitle";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    //包含了
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  });
});
router.get("/tdtitle",(req,res)=>{
  var sql="select * from xz_shouye_tdtitle";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    //包含了
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  });
});
router.get("/kftitle",(req,res)=>{
  var sql="select * from xz_shouye_kftitle";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    //包含了
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  });
});
router.get("/rosetitle",(req,res)=>{
  var sql="select * from xz_shouye_rosetitle";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    //包含了
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  });
});
module.exports=router;