var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'fymca'
});

conn.connect(function(error) {
    if(error) throw error;
    console.log("Database Connected!");

    // SQL: UPDATE query to change ename where id is 1
    const updateSql = "UPDATE emp1 SET ename = 'Alicia' WHERE id = 1";

    conn.query(updateSql, function(error, result) {
        if(error) throw error;
        
        // result.affectedRows tells you how many records were changed
        console.log(`UPDATE Operation Complete. ${result.affectedRows} row(s) updated.`);
        
        conn.end(); // Close the connection
    });
});