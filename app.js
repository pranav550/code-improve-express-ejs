const express = require("express");
const route = require("./routes");
const app = express();
const port = 8080;
const path = require('path');

app.use('/', route);
app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './resource'))

app.listen(port, () => {
    console.log("server start on 8080")
})