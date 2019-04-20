const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/rosenav",(req,res)=>{
    var sql="select * from xz_cake_nav";
    pool.query(sql,[],(err,result)=>{
      if(err) console.log(err);
      //res.send(result);
      //包含了
    //   res.writeHead(200,{
    //     "Access-Control-Allow-Origin":"*"
    //   });
    //   res.write(JSON.stringify(result));
    //   res.end();
    });
  });


module.exports=router;