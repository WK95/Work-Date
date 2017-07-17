var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  var a = req.body;
  console.log(a);

});

router.post('/one',(req,res)=>{
  res.render("OK");
  var a = req.body;
  console.log(a);
})
module.exports = router;
