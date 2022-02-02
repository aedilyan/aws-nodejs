const path = require('path')
const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

// app.get('/', (req, res) => {
//     res.send("hello from server");
// })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server started');
})