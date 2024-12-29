const express = require('express');
const urlRoute = require('../url-shortner/routes/url');
const mongoose = require('mongoose');
const bodypaser=require('body-parser')

const app = express();
app.use(bodypaser.json());
const port = 8002;

async function startServer() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test1');
    app.use('/api', urlRoute);
    
    app.listen(port, () => {
        console.log(`server started at: ${port}`);
    });
}

startServer();