import express from "express";
import mysql from "mysql";
import cors from "cors";
import { headerConverter, bodyConverter } from "./convertData.js";
import { writeThisMf } from "./writeHtml.js";


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
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong combo!" });
      }
    }
  );
});

app.post("/getData", (req, res) => {
  const header = req.body.header;
  const code = req.body.code;
  const footer = req.body.footer;

  const headerA = header.split(",");
  const title = headerA[2];
  headerConverter(header);
  const bodyArray = bodyConverter(code);

  setTimeout(() => {
    writeThisMf(bodyArray, title);
  }, 5000);
});

app.listen(3001, () => {
  console.log("SERVER RUNNING...");
});
