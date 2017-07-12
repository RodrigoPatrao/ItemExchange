const express    = require('express');
const router     = express.Router();
const models     = require('../models');

router.get('/operations', function(req, res){
  models.Item.findAll().then(function(items){
    res.render('operations', { title: 'Operações', items: items });
  })
})

router.get('/operations/:selectOperation', function(req, res){
  var op = req.params.selectOperation;
  switch(op){
    case 'Compra':
      models.Item.findAll({ where: { operation: req.params.selectOperation }}).then(function(items){
        res.render('operations', { title: 'Operações - Compra', items: items });
      })
      break;
    case 'Venda':
      models.Item.findAll({ where: { operation: req.params.selectOperation }}).then(function(items){
        res.render('operations', { title: 'Operações - Venda', items: items });
      })
      break;
    default:
      res.redirect('/operations');
  }
})

module.exports = router;
