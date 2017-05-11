var mongoose = require('mongoose')

var Schema = mongoose.Schema

var EquipmentSchema = new Schema({
  type: {type: String, required: true},
  price: {type: Number, required: true},
  brand: {type: String},
  condition: {type: String, required: true}
})

var Equipment = mongoose.model('Equipment', EquipmentSchema)

module.exports = Equipment
