'use strict';

var Mongo = require('mongodb');

function Food(o, user){
  this.name = o.name;
  this.calories = o.calories;
  this.meal = o.meal;
  this.date = new Date(o.date);
  this.userId = user._id;
}

Object.defineProperty(Food, 'collection', {
  get: function(){return global.mongodb.collection('foods');}
});

Food.create = function(o, user, cb){
  var f = new Food(o, user);
  Food.collection.save(f, cb);
};


Food.allByUserId = function(userId, cb){
  var _id = Mongo.ObjectID(userId);
  Food.collection.find({userId:_id}).toArray(cb);
};

module.exports = Food;

