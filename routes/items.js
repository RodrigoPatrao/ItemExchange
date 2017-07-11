const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
const models = require('../models');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/items', function(req, res){
  models.Item.findAll().then(function(items){
    res.render('items', { title: 'Mercadorias', items: items});
  })
})

router.post('/items', function(req, res){
  models.Item.create({
    itemType:  req.body.itemType,
    itemName:  req.body.itemName,
    quantity:  req.body.quantity,
    price:     req.body.price,
    operation: req.body.operation
  }).then(function(){
    res.redirect('/items')
  });
});

router.get('/items/edit/:id', function(req, res){
  models.Item.findOne({ where: { id: req.params.id }}).then(function(item){
    res.render('edit_item', { title: 'Editar Mercadoria', item: item})
  });
})

router.post('/items/edit/:id', function(req, res){
  models.Item.findOne({ where: { id: req.params.id }}).then(function(item){
    item.update({
      itemType:  req.body.itemType,
      itemName:  req.body.itemName,
      quantity:  req.body.quantity,
      price:     req.body.price,
      operation: req.body.operation
    }).then(function(){
      res.redirect('/items')
    })
  })
})

router.get('/items/delete/:id', function(req, res){
  models.Item.findOne({ where: { id: req.params.id }}).then(function(item){
    item.destroy().then(function(){
      res.redirect('/items');
    })
  })
})
module.exports = router;
