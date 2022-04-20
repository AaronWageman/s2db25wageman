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
//exports.entree_delete = function(req, res) { 
  //  res.send('NOT IMPLEMENTED: Entree delete DELETE ' + req.params.id); 
//}; 

// Handle Costume delete on DELETE. 
exports.entree_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Entree.findByIdAndDelete(req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle Costume update form on PUT. 
//exports.entree_update_put = function(req, res) { 
  //  res.send('NOT IMPLEMENTED: Entree update PUT' + req.params.id); 
//};

// Handle Costume update form on PUT. 
exports.entree_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Entree.findById(req.params.id) 
        // Do updates of properties 
        if(req.body.name) toUpdate.name = req.body.name; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.calories) toUpdate.calories = req.body.calories; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.entree_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Entree.findById( req.query.id) 
        res.render('entreedetail',  
{ title: 'Entree Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.entree_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('entreecreate', { title: 'Entree Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 