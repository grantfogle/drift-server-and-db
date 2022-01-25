const express = require("express");
const app = express();
const http = require("http");
const queries = require("./queries");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { fetchWebData } = require("./crons/riverFlowCron");

// helper source https://karlmatthes.medium.com/node-authentication-with-express-and-knex-d2d8204537c5

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 8080;

app.set("secretKey", "nodeRestApi");
app.use(cors());
app.use(bodyParser.json());

app.post("/api/signup", (req, res, next) => {
  const { email, password } = req.body;
  queries
    .getUser(email)
    .then(user => {
      if (user.length > 0) {
        return res.send({ message: "User already exists" });
      }

      let hashedPassword = bcrypt.hashSync(password, 10);
      return queries.createUser(email, hashedPassword);
    })
    .then(user => {
      const token = jwt.sign({ id: user[0].id }, req.app.get("secretKey"), {
        expiresIn: "1h"
      });

      res.json({ user: user[0], token: token });
    })
    .catch(error => next(error));
});

app.post("/api/login", (req, res, next) => {
  const { email, password } = req.body;
  queries.getUser(email).then(user => {
    if (user.length === 0) {
      return res.send({ message: "User not found" });
    }
    return bcrypt.compare(password, user[0].password).then(isGood => {
      if (isGood) {
        const token = jwt.sign({ id: user[0].id }, req.app.get("secretKey"), {
          expiresIn: "1h"
        });

        return res.json({ user: user[0], message: "Authenticated", token });
      }
      return res.send({ message: "Password is incorrect" });
    });
  });
});

app.delete("/api/user", (req, res, next) => {
  const { email } = req.body;
  /*
  do i check for like a token from ui/correct 
  password to prove it's legit ?
  */
  queries
    .deleteUser(email)
    .then(status => {
      if (status === 1) {
        res.send({ message: "User deleted" });
      } else {
        res.send({ message: "User does not exist" });
      }
    })
    .catch(error => next(error));
});

// app.put('/api/user' update password)
// app.put(/api/river)
// app.delete('/api/river')

app.get("/api/users", (req, res, next) => {
  queries
    .getAllUsers()
    .then(users => res.send(users))
    .catch(error => next(error));
});

app.get("/api/rivers", (req, res) => {
  queries.listAll().then(rivers => res.send(rivers));
});

app.get("/api/flows", (req, res, next) => {
  fetchWebData();
  res.send("asdfasfd");
  // console.log(req);
});
// create basic server that fetches list of river flows daily
// and returns to my server
// add authentication
// add user capabilities, user info, favorite rivers
// schedule crons for early in the morning
// max of 100 per call, so will setup
// a call for watershed, starting with colorado river
const usgsWaterDataUrl =
  "https://waterservices.usgs.gov/nwis/iv/?format=rdb&sites=06006000,06012500,06016000,06017000,06018500&period=P1D&modifiedSince=PT30M&parameterCd=00060";

// make a call to
// 09058000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
