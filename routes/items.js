const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
const models     = require('../models');
const sequelize  = require('sequelize');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/items/:curr?', function(req, res){
  var edit = {};
  models.Item.findAll({ order: [["updatedAt", "DESC"]] }).then(function(items){
    res.render('items', { title: 'Mercadorias', items: items, edit: edit });
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
  models.Item.findAll({ order: [["updatedAt", "DESC"]], raw: true}).then(function(items){
    models.Item.findOne({ where: { id: req.params.id }}).then(function(edit){
      res.render('items', { title: 'Editar Mercadoria', items: items, edit: edit})
    });
  });
})

router.post('/items/edit/:id', function(req, res){
  models.Item.findOne({ where: { id: req.params.id }}).then(function(item){
    item.itemType  = req.body.itemType,
    item.itemName  = req.body.itemName,
    item.quantity  = req.body.quantity,
    item.price     = req.body.price,
    item.operation = req.body.operation
    item.save().then(function(){
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
