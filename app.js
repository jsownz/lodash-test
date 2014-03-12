var _ = require('lodash');

var aList = ['testing','this','to','see','how','it','works'];

for (var i = 0; i < 1000000; i++) {
  aList.push('item'+i);
}

var start = new Date().getTime();

_.forEach(aList, function(item){
//aList.forEach(function(item){
  var test = item;
  //console.log(item);
});

var end = new Date().getTime();
var time = end - start;

console.log(time);
