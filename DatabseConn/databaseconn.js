var mysql = require('mysql');
var conn = mysql.createConnection({
 host: 'localhost',
 user:'root',
 password: 'root123',
 database:'fymca'
});
conn.connect( function(error){
if(error) throw error;
console.log("Connected");
}
);