'use strict';

var Food = require('../models/food');

exports.create = function(req, res){
  Food.create(req.body, req.user, function(err, food){
    res.send({food:food});
  });
};

exports.index = function(req, res){
  Food.allByUserId(req.user._id, function(err, foods){
    res.send({foods:foods});
  });
};
