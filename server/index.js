const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "siteezdummy",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  db.query(
    "INSERT INTO user (userName, password, email) VALUES (?,?,?)",
    [username, password, email],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE userName = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({err: err});
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong combo!" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("SERVER RUNNING...");
});
