var router = require('express').Router();
var House = require('./../models/house-model')

exports.mountPath = '/houses'
exports.router = router;

router.route('/')
  .get(getHouses)


router.route('/')
  .post(createHouses)


function getHouses(req, res, next){
  House.find({}).then(function(houses){
    return res.send(houses)
  }).catch(function(err){
    console.log('is' + err)
  })
}

function createHouses(req, res, next){
  var newCar = req.body
    Car.create(newCar)
    .then(function(newelyCreatedCar){
      res.send(newlyCreatedCar)
    })
}