const mysql = require('mysql'); 
const creds = require('./config.js')

const connection = mysql.createConnection(creds)

connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;