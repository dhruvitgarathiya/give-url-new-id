const mongoose = require("mongoose");

const urlScheme = new mongoose.Schema({
    shortId:{
        type : String,
        required   : true,
        unique : true
    },
    redirectUrl:{
        type : String,
        required: true,
    },
    visitHistory:[{
        type: Number,
    }]
},{timestamps:true}
);

const URL = mongoose.model("url",urlScheme);

module.exports = URL;