const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

cron.schedule("* * * * *", () => {
  log("logs every minute");
});

// so what kind of crons do i have/want
// make bulk call to colorado rivers to get 1 day, 7 day, and 30 day flow data
// update my database with results
// if error, send me a text message, twilio?
// use crons
// other: weather? fetch river data? fetch water temps?
