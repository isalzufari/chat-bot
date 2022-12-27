const mysql = require("mysql");
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_chat_reserved_backup'
});

conn.connect();

module.exports = conn;