import express from "express";
import mysql from "mysql";
import cors from "cors";

import bcrypt from "bcrypt";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

import { headerConverter, bodyConverter } from "./convertData.js";
import { writeThisMf } from "./writeHtml.js";

const saltRound = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

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

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO user (userName, password, email) VALUES (?,?,?)",
      [username, hash, email],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "$2a$10$wqKSiBgD34df93Wddr3hGeqkhxsMAtB54vnYK2enplgi1MXeCRGFO",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  }else{
    res.send({loggedIn: false})
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM user WHERE userName = ?", username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, pwRes) => {
        if (pwRes) {
          req.session.user = result;
          res.send(result);
        } else {
          res.send({ message: "Wrong combo!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exists!" });
    }
  });
});

app.post("/getData", (req, res) => {
  const header = req.body.header;
  const code = req.body.code;

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
