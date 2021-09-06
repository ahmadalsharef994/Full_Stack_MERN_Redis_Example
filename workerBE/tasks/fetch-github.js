import fetch from "node-fetch";
import { promisify } from "util";
//var Redis = require('redis');
 import * as redis from "redis";

var allJobs={}


const client = redis.createClient()
//const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)

const baseURL = "https://api.publicapis.org/entries";

export default async function fetchGithub() {
 const res = await fetch(baseURL)
 const jobs = await res.json()
 allJobs = jobs["entries"]
 const someJobs = allJobs.filter (job =>
    job.Auth.includes("apiKey")
)
const sucess = await setAsync("github", JSON.stringify(someJobs))
console.log(sucess)

}





fetchGithub()