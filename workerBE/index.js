// var CronJob = require('cron').CronJob;

// new CronJob ('*/1 * * * *', () => {
//   console.log('running a task every minute');
// }, null, true);

var fetch = require("node-fetch")

const baseURL = "https://api.publicapis.org/entries";

modules.exports = async function fetchGithub() {
 const res = await fetch(baseURL)
 const jobs = await res.json()
 console.log(jobs.length)
}

module.exports()