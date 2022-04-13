var express = require('express');
const entree_controller = require('../controllers/entrees.js'); 
var router = express.Router();


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('entree', { title: 'Search Results Entree' });
});
*/
router.get('/', entree_controller.entree_view_all_Page );

module.exports = router;
