
var mysql = require('mysql');
var conn = mysql.createConnection({
 host: 'localhost',
 user:'root',
 password: 'root123',
 database:'fymca'
});
conn.connect( function(error){
if(error) throw error;
conn.query("insert into emp1 values(1,'Sujit'),(2,'ram')",function(error){
if(error) throw error;
console.log("Record inserted");
});
}
)