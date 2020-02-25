const mysql = require('mysql')

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'hh9jcrbfadbugcmg:ntm4yep39ot8els9@z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'hh9jcrbfadbugcmg',
  password: 'ntm4yep39ot8els9',
  database: 'ioisqzm06v1oymye'
})
}
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

module.exports = connection

// Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "hh9jcrbfadbugcmg",
//   password: "ntm4yep39ot8els9 ",
//   database: "ioisqzm06v1oymye"
// });


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
// // Export connection for our ORM to use.
// module.exports = connection;
