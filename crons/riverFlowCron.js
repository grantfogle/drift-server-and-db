const express = require("express");
const cron = require("node-cron");
const puppeteer = require("puppeteer");
// const axios = require("axios");

function getCrons() {
  cron.schedule("* * * * *", () => {
    console.log("logs every minute");
  });
}

const fetchWebData = async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(
    "https://waterdata.usgs.gov/co/nwis/current/?type=flow&group_key=huc_cd"
  );
  //   var element = await page.waitFor("table > table[1]");
  //   var element = await page.select("<table>");
  //   var text = await page.evaluate(element => element.textContent, element);
  const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll("table tr"));
    const tdsRemovedHeader = tds.slice(2, tds.length - 1);
    const innerTdText = tdsRemovedHeader.map(td => td.innerText);
    // return tdsRemovedHeader.map(td => td.innerText);

    // const riverHeaders = innerTdText.filter(td => {
    //   const tdInnerText = td.innerText;
    //   console.log("inner text", tdInnerText);
    //   if (tdInnerText.substring(0, 1) === " 1") {
    //     return tdInnerText;
    //   }
    // });
    return innerTdText;
    // if it starts with ' 10, then add to rivers array
    // if it sta
    // current flow 0.69 	mean flow .34 	.34
    // return an object with usgs_id, river name,
    // data, gage height, current flow, mean flow, median flow

    // console.log(data);
  });
  browser.close();
  console.log("bing", data);
};

// set up node cron for this guy
// schedule once per day
// set up twilio to text me if there's an issue
// have two databases, one for today's data (already created)
// and one for other 30 day which removes the first value and adds last value
// https://waterdata.usgs.gov/co/nwis/current/?type=flow&group_key=huc_cd

// one cron for updating river flows for 1 day
// one cron for updating river flows for 30 days

module.exports = { getCrons, fetchWebData };
// so what kind of crons do i have/want
// make bulk call to colorado rivers to get 1 day, 7 day, and 30 day flow data
// update my database with results
// if error, send me a text message, twilio?
// use crons
// other: weather? fetch river data? fetch water temps?
