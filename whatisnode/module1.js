var m2 = require('./module2');
var _ = require('underscore');

console.log('hi');
//console.log(m2);

m2(); //this calls the overrided export function from module2.js

console.log(_);