const express = require("express");
const app = express();
const http = require("http");
const queries = require("./queries");

const hostname = "127.0.0.1";
const PORT = 3000;

app.use(express.json());

app.get("/api/rivers", (req, res) => {
  queries.listAll().then(students => res.send(students));
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
