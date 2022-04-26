const mongoose = require("mongoose") 
const entreeSchema = mongoose.Schema({ 
 name: String, 
 calories: Number, 
 cost:{
    type: Number,
    min: [1, 'Cost must be more than 1'],
    max: 1000
 }
}); 
 
module.exports = mongoose.model("Entree", 
entreeSchema)