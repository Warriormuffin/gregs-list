var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CarSchema = new Schema({
  make: {type: String, required: true},
  model: {type: String, required: true},
  condition: {type: String, required: true}

})

var Car = mongoose.model('Car', CarSchema)

module.exports = Car;
