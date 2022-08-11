const express = require('express');

const app = express();
const blog = express();
const admin = express();

app.use('/blog', blog);
blog.use('/admin', admin);

app.all('/user', (req, res, next) => {
    console.dir(app.path()) // ''
    console.dir(blog.path()) // '/blog'
    console.dir(admin.path()) // '/blog/admin'
    res.send(`About by ${req.method} method`);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})