const express = require('express');
var router = express.Router();

router.get('/operations', function(req, res){
  res.render('operations');
})

module.exports = router;
