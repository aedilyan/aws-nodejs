const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("hello from server");
})

app.listen(process.env.port || 3000, () => {
    console.log('server started at port 3000');
})