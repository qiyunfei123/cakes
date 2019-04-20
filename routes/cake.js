const express=require("express");
const router=express.Router();
const pool=require("../pool");
//http://localhost:3000/index
router.get("/",(req,res)=>{
  var sql="select * from xz_cake_jx";
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
// 热销蛋糕
router.get("/rx",(req,res)=>{
  var sql="select * from xz_cake_rx";
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
router.get("/rx1",(req,res)=>{
  var sql="select * from xz_cake_rx1";
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
router.get("/rx2",(req,res)=>{
  var sql="select * from xz_cake_rx2";
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
router.get("/rx3",(req,res)=>{
  var sql="select * from xz_cake_rx3";
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
router.get("/rx5",(req,res)=>{
  var sql="select * from xz_cake_rx5";
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
router.get("/marry2",(req,res)=>{
  var sql="select * from xz_cake_marry2";
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
router.get("/art2",(req,res)=>{
  var sql="select * from xz_cake_art2";
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
router.get("/child2",(req,res)=>{
  var sql="select * from xz_cake_child2";
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