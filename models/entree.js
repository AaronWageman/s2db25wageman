const mongoose = require("mongoose") 
const entreeSchema = mongoose.Schema({ 
 name: String, 
 calories:{
    type: Number,
    min:[0, 'Cost must be more than 0'],
    max: 10000
 }, 
 cost:{
    type: Number,
    min: [1, 'Cost must be more than 1'],
    max: 1000
 }
}); 
 
module.exports = mongoose.model("Entree", 
entreeSchema)