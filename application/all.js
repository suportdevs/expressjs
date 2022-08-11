const express = require('express');

const app = express();

app.all('/about', (req, res, next) => {
    res.send(`About by ${req.method} method`);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})