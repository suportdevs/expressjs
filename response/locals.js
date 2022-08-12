const express = require('express');
const ejs = require('ejs');

const app = express();

app.all('/', (req, res) => {
    res.set('title', "Mamun");
    console.log(res.get('title'));
    res.send("Hello world");
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})