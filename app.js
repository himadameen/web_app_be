const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config({ path: ".env" })

const authRoute = require('./routes/auth')
const mediaRoute = require('./routes/media');
const commentRoute = require('./routes/comment');

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors());

app.use('/user', authRoute);
app.use('/media', mediaRoute);
app.use('/comment', commentRoute);

app.get('/', (req, res) => {
    try {
        res.send("Hey !! Shall start the backend")
    }
    catch (err) {
        res.status(400).json(err)
    }
})


mongoose.connect(process.env.MONGOURI)


app.listen(process.env.APP_PORT || 2400)