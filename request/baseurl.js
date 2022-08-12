const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const admin = express();
app.use(cookieParser());

admin.get('/dashboard', (req, res) => {
    console.log(req.originalUrl);
    res.send("Requested in admin app");
})

app.use('/admin', admin);

app.all('/user/:id', (req, res, next) => {
    console.log(req.get('accept'));
    res.send(`About by ${req.method} method`);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})