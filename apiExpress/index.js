const express = require("express")
const app = express()
const port=3001

const util = require('util');
redis = require("redis");
const client = redis.createClient()
const getAsync = util.promisify(client.get).bind(client)


app.get('/jobs', async(req, res)=>{
        var jobs=await getAsync('github')
        jobs = JSON.parse(jobs)
        console.log(jobs.length)
        res.header('Access-Control-Allow-Origin', "*")
        return res.send(jobs)
})

app.listen(port, ()=> console.log("Example app listening on port 3001"))