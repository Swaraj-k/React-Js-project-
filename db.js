const mongoose = require("mongoose");
//Link of the mongoDb Server 
const mongoURI = "mongodb://localhost:27017/inotebook";
const connecToMongo = () => {
  mongoose.connect(mongoURI);
};
module.exports = connecToMongo;