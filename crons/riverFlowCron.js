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
    const filteredHeaders = innerTdText.filter(dataStr => {
      if (dataStr.substring(0, 2) === " 1") {
        return dataStr;
      }
    });
    const editedRiverDataText = innerTdText.map(dataRow => {
      if (
        dataRow.substring(0, 2) === "06" ||
        dataRow.substring(0, 2) === "07" ||
        dataRow.substring(0, 2) === "09"
      ) {
        // return an object with usgs_id, river name,
        // data, gage height, current flow, mean flow, median flow
        const streamArr = dataRow.split("\t");
        // may process name and str
        const streamObj = {
          usgsId: streamArr[0],
          name: streamArr[1],
          date: streamArr[2],
          currentCFS: streamArr[4],
          meanCFS: streamArr[5],
          medianCFS: streamArr[6]
        };
        return streamObj;
      }
      return null;
    });
    return editedRiverDataText.filter(stuff => stuff !== null);
    // return { filteredHeaders, editedRiverDataText};
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
