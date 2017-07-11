const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/items', function(req, res){
  res.render('items', { title: 'Mercadorias'});
})

module.exports = router;
