var router = require('express').Router();
var House = require('./../models/house-model')

exports.mountPath = '/houses';
exports.router = router;

router.route('/')
  .get(getHouses)

router.route('/')
  .post(saveHouses)


function getHouses(res, req, next){
  House.find({}).then(function(house){
    res.send(house)
  })
}

function saveHouses(res, req, next){
  var House = req.body
    House.post(newelyCreatedHouse).then(function(newelyCreatedHouse){
      res.send(newelyCreatedHouse)
    })
  }
