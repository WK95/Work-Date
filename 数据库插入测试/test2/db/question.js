var mongoose = require('./mongoose');

let Schema = mongoose.Schema;

let userShema = Schema({
  title:{type:String},
  content:{type:String},
  tag : Array,
  reward : Number,
  time : Date
});

let questions = mongoose.model('questions',userShema);
module.exports = questions;
