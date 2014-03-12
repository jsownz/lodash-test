var _ = require('lodash');

var aList = ['testing','this','to','see','how','it','works'];

for (var i = 0; i < 1000000; i++) {
  aList.push('item'+i);
}

function testLoDashForEach(type){
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

console.time('LoDash forEach Test');
testLoDashForEach('lodash');
console.timeEnd('LoDash forEach Test');

console.time('Native forEach Test');
testLoDashForEach('native');
console.timeEnd('Native forEach Test');
