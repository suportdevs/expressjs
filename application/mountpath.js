const express = require('express');

const app = express(); //main app
const admin = express(); //sub app

admin.on('mount', function (parent) {
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
  })

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send("Sub App");
})

app.use('/admin', admin);
app.get('/', (req, res) => {
    console.log(app.mountpath);
    res.send('Main App');
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})