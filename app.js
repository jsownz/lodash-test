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

function testIndexOf(type){
  switch(type) {
    case 'lodash':
      return _.indexOf(aList, "item990000");
      break;
    case 'native':
      return aList.indexOf("item990000");
      break;
  }
}

function testFilter(type){
  switch(type) {
    case 'lodash':
      var evens = _.filter(aList, function(num) { return num % 2 == 0; });
      break;
    case 'native':
      var evens = aList.filter(function(num) { return num % 2 == 0; });
      break;
  }
}

function testShuffle(type){
  var aListCopy = aList;
  switch(type) {
    case 'lodash':
      var shuffled = _.shuffle(aListCopy);
      break;
    case 'native':
      for(var j, x, i = aListCopy.length; i; j = parseInt(Math.random() * i), x = aListCopy[--i], aListCopy[i] = aListCopy[j], aListCopy[j] = x);
      var shuffled = aListCopy;
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

console.time('LoDash indexOf Test');
testIndexOf('lodash');
console.timeEnd('LoDash indexOf Test');

console.time('Native indexOf Test');
testIndexOf('native');
console.timeEnd('Native indexOf Test');

console.time('LoDash filter Test');
testFilter('lodash');
console.timeEnd('LoDash filter Test');

console.time('Native filter Test');
testFilter('native');
console.timeEnd('Native filter Test');

console.time('LoDash shuffle Test');
testShuffle('lodash');
console.timeEnd('LoDash shuffle Test');

console.time('Native shuffle Test');
testShuffle('native');
console.timeEnd('Native shuffle Test');
