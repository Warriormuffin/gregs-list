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
    console.log('getHouse' + err)
  })
}

function createHouses(req, res, next){
  var newHouse = req.body.house
    House.create(newCar)
    .then(function(newelyCreatedHouse){
      res.send(newlyCreatedHouse)
    }).catch(function(err){
      console.log('createHouse' + err)
    })
}