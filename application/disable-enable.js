const express = require('express');

const app = express();

app.enable('case sensitive routing');
app.disable('case sensitive routing');
// app.enabled('case sensitive routing');
// app.disabled('case sensitive routing');

app.get('/about', (req, res) => {
    res.send("This is About page");
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})