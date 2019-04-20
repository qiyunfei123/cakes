const express=require("express");
const router=express.Router();
const pool=require("../pool");
//http://localhost:3000/index
router.get("/",(req,res)=>{
  var sql="select * from cake_cart";
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