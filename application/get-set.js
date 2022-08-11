const express = require('express');

const app = express();

app.set('title', 'My App');

app.get('/about', (req, res, next) => {
    console.log(app.get('title'));
    res.send(`About by ${req.method} method`);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})