const express = require('express');

const app = express();

app.param('id', (req, res, next, id) => {
    console.log('Calling user ' + id);
    next();
})

app.get('/user/:id', (req, res, next) => {
    console.log('although this matches');
    next();
})
app.get('/user/:id', (req, res) => {
    console.log('and this matches too.');
    res.end();
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})