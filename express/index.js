const express = require('express');
const app = express();
const path = require('path');

// app.use(express.json());
// app.use(express.raw());
// app.use(express.urlencoded());

// app.use(express.static(__dirname + '/public', {
//     index: 'home.html'
// }));

const router = express.Router({
    caseSensitive: true
});

app.use(router)

// app.get('/', (req, res) => {
//     res.send('This is Home Page with get request.');
// })
// app.post('/', (req, res) => {
//     console.log(__dirname)
//     res.send('This is Home Page with post request.');
// })
        
router.get('/about', (req, res) => {
    res.send('This is About Page with get request.');
})
app.listen(3000, () => {
    console.log("Listening to port 3000");
});