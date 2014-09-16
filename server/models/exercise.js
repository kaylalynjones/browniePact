'use strict';

var Mongo = require('mongodb');
    //Tag = require('../models/tags.js');

function Exercise(o, user){
  this.name = o.name;
  this.userId = user._id;
  this.duration = o.duration;
  this.date = new Date(o.date);
  this.type = o.type;
}

Object.defineProperty(Exercise, 'collection', {
  get: function(){return global.mongodb.collection('exercises');}
});

Exercise.create = function(o, user, cb){
  var e = new Exercise(o, user);
  Exercise.collection.save(e, cb);
};

Exercise.allByUserId = function(userId, cb){
  var _id = Mongo.ObjectID(userId);
  Exercise.collection.find({userId:_id}).toArray(cb);
};

module.exports = Exercise;

