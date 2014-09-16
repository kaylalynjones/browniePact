'use strict';

var Exercise = require('../models/exercise');

exports.create = function(req, res){
  Exercise.create(req.body, req.user, function(err, exercise){
    res.send({exercise:exercise});
  });
};

exports.index = function(req, res){
  Exercise.findActivities(function(err, activities){
    Exercise.allByUserId(req.user._id, function(err, exercises){
      res.send({exercises:exercises, activities:activities});
    });
  });
};
