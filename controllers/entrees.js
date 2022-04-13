var Entree = require('../models/entree'); 
 
// List of all Costumes 
exports.entree_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree list'); 
}; 
 
// for a specific Costume. 
exports.entree_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.entree_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.entree_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree delete DELETE ' + req.params.id); 
}; 
// Handle Costume update form on PUT. 
exports.entree_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree update PUT' + req.params.id); 
};