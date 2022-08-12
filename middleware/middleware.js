const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
const admin = express.Router();

app.use(express.json());
app.use(cookieParser());

const loggerWrapper = (options) => {
    return (req, res, next) => {
        if(options.log){
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.ip}`);
            next();
        } else {
            throw new Error('Faild to log');
        }
    }
}

admin.use(loggerWrapper({log: false}));

admin.get('/dashboard', (req, res) => {
    res.send("we are in admin dashboard");
})


app.use('/admin', admin);

app.get('/', (req, res) => {
    res.send("Hello world");
})

const handleEroor = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("This is server side error!");
}

admin.use(handleEroor);

app.listen(3000, () => {
    console.log("Listening to port 3000");
})