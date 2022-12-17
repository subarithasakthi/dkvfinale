const mysql=require("mysql2");


const conn = mysql.createConnection(
    { host: "localhost", // host for connection 
    port: 3306, // default port for mysql is 3306 
    database: "dkvdb", // database from which we want to connect out node application 
    user: "root", // username of the mysql connection 
    password: "" // password of the mysql connection 
});

conn.connect(function (err) {
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });