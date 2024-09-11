const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});
const port = process.env.PORT;

// Allows the
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port || 8000, () => {
    console.log(`Express server started on port: ${port}`)
});
