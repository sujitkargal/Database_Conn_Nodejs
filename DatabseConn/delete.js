var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'fymca'
});

conn.connect(function(error) {
    if(error) throw error;
    console.log("Database Connected! ");

    // SQL: DELETE query to remove the employee record where id is 1
    const deleteSql = "DELETE FROM emp1 WHERE id = 1";

    conn.query(deleteSql, function(error, result) {
        if(error) throw error;
        
        // result.affectedRows tells you how many records were deleted
        console.log(`DELETE Operation Complete. ${result.affectedRows} row(s) deleted.`);
        
        conn.end(); // Close the connection
    });
});