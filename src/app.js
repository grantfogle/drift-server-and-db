const express = require("express");
const app = express();
const cron = require("node-cron");
const http = require("http");

const hostname = "127.0.0.1";
const PORT = 3000;

app.use(express.json());

// create basic server that fetches list of river flows daily
// and returns to my server
// add authentication
// add user capabilities, user info, favorite rivers
// schedule crons for early in the morning
// max of 100 per call, so will setup
// a call for watershed, starting with colorado river
const usgsWaterDataUrl =
  "https://waterservices.usgs.gov/nwis/iv/?format=rdb&sites=06006000,06012500,06016000,06017000,06018500&period=P1D&modifiedSince=PT30M&parameterCd=00060";

cron.schedule("47 21 * * *", () => {
  fetch(usgsWaterDataUrl)
    .then(response => {
      console.log("hit", response);
      return response.json();
    })
    .then(data => console.log(data));
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "asdf",
    size: "large"
  });
});

app.get("river/:id", (req, res) => {
  fetch("");
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  // middleware to parse json before
  console.log(logo);
  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `asdf with your ${logo} and Id of ${id}`
  });
});

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
