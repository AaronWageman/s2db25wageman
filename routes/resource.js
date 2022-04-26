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

//GET create costume page */ 
router.get('/create', entree_controller.entree_create_Page); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect('/login'); 
  } 

 
/* GET create update page */ 
router.get('/update', secured, entree_controller.entree_update_Page);


/* GET delete costume page */ 
router.get('/delete', entree_controller.entree_delete_Page);

 
module.exports = router; 