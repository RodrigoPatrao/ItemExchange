const express = require('express');
var router = express.Router();
var items = {};

router.get('/items', function(req, res){
  res.render('items');
})

module.exports = router;
