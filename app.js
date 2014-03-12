var _ = require('lodash');

var aList = ['testing','this','to','see','how','it','works'];

for (var i = 0; i < 1000000; i++) {
  aList.push('item'+i);
}

function testLoop(){
  _.forEach(aList, function(item){
  //aList.forEach(function(item){
    var test = item;
    //console.log(item);
  });
}

console.time('test');

testLoop();

console.timeEnd('test');
