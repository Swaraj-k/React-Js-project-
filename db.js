const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook";

const connecToMongo = ()=>{
    mongoose.connect(mongoURI)
    }


module.exports = connecToMongo;