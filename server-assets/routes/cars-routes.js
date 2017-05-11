var router = require('express').Router();
var Car = require('./../models/car-model')

exports.mountPath = '/cars'
exports.router = router;

router.route('/')
  .get(getCars)


router.route('/')
  .post(createCars)


function getCars(req, res, next){
  Car.find({}).then(function(cars){
    res.send(cars)
  })
}

function createCars(req, res, next){
  var newCar = req.body
    Car.create(newCar)
    .then(function(newelyCreatedCar){
      res.send(newlyCreatedCar)
    })
}