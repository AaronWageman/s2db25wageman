module.exports.api = function (req, res) { 
    res.write('['); 
    res.write('{"resource":"Entree", "Cost": "money", "Calories": "number"'); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']');
    res.send(); 
};
