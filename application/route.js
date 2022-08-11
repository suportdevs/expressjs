const express = require('express');

const app = express();

app.route('/events')
    .all((req, res, next) => {
        res.send(`About by ${req.method} method`);
    })
    .get((req, res) => {
        res.send('Requested by get method');
    })
    .put((req, res) => {
        res.send("Requestd by put method");
    })

app.listen(3000, () => {
    console.log("Listening to port 3000");
})