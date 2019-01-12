var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("req.query : ",req.query);
  console.log("req.body : ",req.body);
  res.send('test url');
});

router.post('/',(req,res,next)=>{
    console.log("req.body : ",req.body);
    res.send('post url 입니다.');
});

module.exports = router;
