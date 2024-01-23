const express = require('express');


const app = express();


app.get('/testapi', (req, res) => {
    console.log("Hellop from node");
    res.send('Working fine');
})


app.get('/demoapi', (req, res) => {
    console.log("Hellop from node");
    res.send('Working this fine');
})

app.listen(5000, () => {
    console.log('Connected')
})


module.exports = app;