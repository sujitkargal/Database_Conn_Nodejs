var mysql = require('mysql');
var conn = mysql.createConnection({
 host: 'localhost',
 user:'root',
 password: 'root123',
 database:'fymca'
});
conn.connect( function(error){
if(error) throw error;
conn.query("select * from tr",function(error,result){
if(error) throw error;
console.log(result);
});
}
);