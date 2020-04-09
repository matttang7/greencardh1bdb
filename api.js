const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cs411pw',
  database: 'cs411'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});