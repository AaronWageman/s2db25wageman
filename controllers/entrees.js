var Entree = require('../models/entree'); 
 
// List of all Costumes 
//exports.entree_list = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Entree list'); 
//}; 
// List of all Costumes 
exports.entree_list = async function(req, res) { 
    try{ 
        theEntrees = await Entree.find(); 
        res.send(theEntrees); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
//exports.entree_detail = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Entree detail: ' + req.params.id); 
//}; 

exports.entree_detail = async function(req, res) { 
    console.log("detail" + req.params.id) 
    try { 
        result = await Entree.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
//exports.entree_create_post = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Entree create POST'); 
//}; 

// Handle Costume create on POST. 
exports.entree_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Entree(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.cost = req.body.cost; 
    document.calories = req.body.calories; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.entree_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree delete DELETE ' + req.params.id); 
}; 
// Handle Costume update form on PUT. 
exports.entree_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Entree update PUT' + req.params.id); 
};

// VIEWS 
// Handle a show all view 
exports.entree_view_all_Page = async function(req, res) { 
    try{ 
        theEntrees = await Entree.find(); 
        res.render('entree', { title: 'Entree Search Results', results: theEntrees }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 