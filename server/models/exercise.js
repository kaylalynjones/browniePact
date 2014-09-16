'use strict';

var Mongo = require('mongodb');

function Exercise(o, user, type){
  this.typeId = type._id;
  this.name = type.name;
  this.calories = type.halfhrCalories;
  this.userId = user._id;
  this.duration = o.duration;
  this.date = new Date(o.date);
}

Object.defineProperty(Exercise, 'collection', {
  get: function(){return global.mongodb.collection('exercises');}
});

Exercise.create = function(o, user, cb){
  var id = Mongo.ObjectID(o.type);
  global.mongodb.collection('activities').findOne({_id:id}, function(err, type){
    var e = new Exercise(o, user, type);
    Exercise.collection.save(e, cb);
  });
};

Exercise.findActivities = function(cb){
  global.mongodb.collection('activities').find().toArray(cb);
};

Exercise.allByUserId = function(userId, cb){
  var _id = Mongo.ObjectID(userId);
  Exercise.collection.find({userId:_id}).toArray(cb);
};

module.exports = Exercise;

