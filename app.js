var _ = require('lodash');

var aList = ['testing','this','to','see','how','it','works'];

for (var i = 0; i < 1000000; i++) {
  aList.push('item'+i);
}

function testEach(type){
  switch(type) {
    case 'lodash':
      _.each(aList, function(item){
        var test = item;
      });
      break;
    case 'native':
      aList.forEach(function(item){
        var test = item;
      });
      break;
  }
}

function testContains(type){
  switch(type) {
    case 'lodash':
      if ( _.contains(aList, "item990000") ) {
        return true;
      }
      break;
    case 'native':
      if ( aList.indexOf("item990000") > -1 ) {
        return true;
      }
      break;
  }
}

console.time('LoDash Each Test');
testEach('lodash');
console.timeEnd('LoDash Each Test');

console.time('Native Each Test');
testEach('native');
console.timeEnd('Native Each Test');

console.time('LoDash Contains Test');
testContains('lodash');
console.timeEnd('LoDash Contains Test');

console.time('Native Contains Test');
testContains('native');
console.timeEnd('Native Contains Test');
