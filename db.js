const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017";

const connecToMongo = ()=>{
    mongoose.connect(mongoURI)
    }


module.exports = connecToMongo;