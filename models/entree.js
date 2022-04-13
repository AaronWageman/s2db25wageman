const mongoose = require("mongoose") 
const entreeSchema = mongoose.Schema({ 
 name: String, 
 calories: Number, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Entree", 
entreeSchema)