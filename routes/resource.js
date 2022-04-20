var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var entree_controller = require('../controllers/entrees.js'); 
 
/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api); 

/* GET detail costume page */ 
router.get('/detail', entree_controller.entree_view_one_Page); 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/entrees', entree_controller.entree_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/entrees/:id', entree_controller.entree_delete); 
 
// PUT request to update Costume. 
router.put('/entrees/:id', entree_controller.entree_update_put); 
 
// GET request for one Costume. 
router.get('/entrees/:id', entree_controller.entree_detail);
 
// GET request for list of all Costume items. 
router.get('/entree', entree_controller.entree_list); 

 
module.exports = router; 