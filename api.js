const path = require('path')
const express = require('express')
const fs = require('fs');

const app = express()

const port =process.env.PORT || 3000

let rawdata = fs.readFileSync('newsData.json');
let news= JSON.parse(rawdata);


app.get('/news', (req, res) => {
    res.send(news[Math.floor((Math.random() * 99))])
})

app.get('*', (req, res) => {
    res.send("Goto /news to fetch random news")
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})