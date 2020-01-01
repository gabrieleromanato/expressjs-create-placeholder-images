'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const validator = require('validator');
const Image = require('./classes/Image');


app.disable('x-powered-by');

app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/placeholder/:width/:height', (req, res) => {
    const {width, height} = req.params;
    if(!validator.isInt(width) || !validator.isInt(height)) {
        res.sendStatus(401);
        return;
    }
    const text = 'X';

    const img = new Image({
        width,
        height,
        text
    });

    img.create(res);
});

app.listen(port);
