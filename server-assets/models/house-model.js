var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HouseSchema = new Schema({
  neighborhood: {type: String, required: true},
  price: {type: String, required: true},
  sqft: {type: Number, required: true}
})

var House = mongoose.model('House', HouseSchema)

module.exports = House;