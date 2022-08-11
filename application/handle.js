const handle = (req, res) => {
    console.log(req.app.locals.username);
    console.log(req.app.locals.email);
    res.send('Hello World');
}

module.exports = handle;