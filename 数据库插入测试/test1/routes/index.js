var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// var url = "mongodb://mydb:123@ds153682.mlab.com:53682/text";
// mongoose.connect(url);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  var a = req.body;
  // console.log(a);


});

router.post('/one',(req,res)=>{
  res.render("OK");
  var c = req.body;
  console.log(c);


})
module.exports = router;
