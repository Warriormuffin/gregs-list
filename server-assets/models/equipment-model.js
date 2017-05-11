var mongoose = require('mongoose')

var Schema = mongoose.Schema


var EquipmentSchema = new Schema({
  type: {typeof: String, required: true},
  price: {typeof: Number, required: true},
  brand: {typeof: String},
  condition: {typeof: String, required: true}
})

var Equipment = mongoose.model('Equipment', EquipmentSchema)