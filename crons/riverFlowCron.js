const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

function getCrons() {
  cron.schedule("* * * * *", () => {
    console.log("logs every minute");
  });
}

// one cron for updating river flows for 1 day
// one cron for updating river flows for 30 days

module.exports = getCrons;
// so what kind of crons do i have/want
// make bulk call to colorado rivers to get 1 day, 7 day, and 30 day flow data
// update my database with results
// if error, send me a text message, twilio?
// use crons
// other: weather? fetch river data? fetch water temps?
