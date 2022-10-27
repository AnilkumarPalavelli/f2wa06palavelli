var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var b=Math.random();
    res.render('computation', { x: `Math.atan() applied to ${b} is ${Math.atan(b)}`,
    y: `Math.exp() applied to ${b} is ${Math.exp(b)}` ,
    z: `Math.expm1() applied to ${b} is ${Math.expm1(b)}` });
  }
  else{

    for (let c in req.query) {

      console.log(c)

      res.render('computation', { x: `Math.atan() applied to ${req.query[c]} is ${Math.atan(req.query[c])}`,
      y: `Math.exp() applied to ${req.query[c]} is ${Math.exp(req.query[c])}` ,
      z: `Math.expm1() applied to ${req.query[c]} is ${Math.expm1(req.query[c])}` })

    }
  }


});


module.exports = router;