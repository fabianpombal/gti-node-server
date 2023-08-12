import mysql from 'mysql2';


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'atopa'
  });

export default db