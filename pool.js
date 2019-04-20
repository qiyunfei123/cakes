//用于创建连接池，哪一个模块需要连接，只需要引入此模块即可
//引入mysql
const mysql=require('mysql');
//创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'xiangmu',
	connectLimit:20
});
//导出连接池对象pool
module.exports=pool;
