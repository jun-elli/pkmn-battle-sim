require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  port: 3306,
  database: DB_NAME || "database",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists users; CREATE TABLE users(userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(15) not null, hashedPass VARCHAR(200) not null, email VARCHAR(40) not null, name VARCHAR(40) not null, surname VARCHAR(40), birthday DATE not null, isShelter BOOLEAN not null);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");
  });

  console.log("Closing...");

  con.end();
});
