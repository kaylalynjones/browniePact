'use strict';
function Tag(){
}

Tag.findAll = function(cb){
  var tags = [
    {name:'swimming', halfhrCalories:200},
    {name:'running', halfhrCalories:300},
    {name:'biking', halfhrCalories:300},
    {name:'walking', halfhrCalories:150},
    {name:'sex', halfhrCalories:150},
    {name:'housework', halfhrCalories:100},
    {name:'tennis', halfhrCalories:150},
    {name:'hiking', halfhrCalories:200},
    {name:'pilates', halfhrCalories:125},
    {name:'vollyball', halfhrCalories:100},
    {name:'yoga', halfhrCalories:250},
    {name:'dancing', halfhrCalories:250},
    {name:'football', halfhrCalories:350},
    {name:'rockclimbing', halfhrCalories:350},
    {name:'basketball', halfhrCalories:350}
  ];

  process.nextTick(function(){
    cb(tags);
  });
};

module.exports = Tag;
