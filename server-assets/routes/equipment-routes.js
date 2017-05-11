var router = require('express').Router();
var Equipment = require('./../models/equipment-model')

exports.mountPath = '/equipment'
exports.router = router;

router.route('/')
  .get(getEquipment)


router.route('/')
  .post(createEquipment)

function getEquipment(req, res, next){
  Equipment.find({}).then(function(equipment){
    res.send(equipment)
  })
}

function createEquipment(req, res, next){
  var newEquipment = req.body.equipment
    Equipment.create(newEquipment)
    .then(function(newlyCreatedEquipment){
      res.send(newlyCreatedEquipment)
    }).catch(function(err){
      console.log(err)
    })
}