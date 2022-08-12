const express = require('express');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.all('/about', (req, res) => {
    console.log(req.body)
    res.send(`About by ${req.method} method`);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})