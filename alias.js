var should = require('should');
should(true).ok;
should(true).eql(true, 'foo');

var a = function() {};
var b = a;

var c = function() {};
var d = c;
var e = d;

var readFile = require('fs').readFile;
readFile('alias.js', function(err, data) {
  console.log(data);
});
