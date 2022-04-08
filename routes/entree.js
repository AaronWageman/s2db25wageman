var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entree', { title: 'Search Results Entree' });
});

module.exports = router;
