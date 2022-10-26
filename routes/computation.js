var express = require('express');
var router = express.Router();
var x =Math.floor(Math.random() * 20);

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }

    var a1 = Math.atan(x);
    var a2 = Math.exp(x);
    var a3 = Math.expm1(x);
    res.send("Math.atan() applied to "+x+" is "+a1+"<br></br>"+
                "Math.exp() applied to "+x+" is "+a2+"<br></br>"+
                "Math.expm1() applied to "+x+" is "+a3);
});

module.exports = router;