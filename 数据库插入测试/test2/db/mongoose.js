var mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/stu";
mongoose.connect(url);

let db = mongoose.connection;

db.on("err",function(){
  console.log(err);
})
db.once("open",function(){
  console.log("connect db Ok!");
})

module.exports = mongoose;
