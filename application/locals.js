const express = require('express');
const handle = require('./handle');

const app = express();

app.locals.username = 'Example Name';
app.locals.email = 'example@gmail.com';

app.get('/', handle);

app.listen(3000, () => {
    console.log("Listening to port 3000");
})