const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public/`));

app.get('/', (req, res) => {
    res.send('This is Home Page with get request.');
})
app.post('/', (req, res) => {
    console.log(__dirname)
    res.send('This is Home Page with post request.');
})

app.listen(3000, () => {
    console.log(__dirname)
    console.log("Listening to port 3000");
});