/*
The util.inspect(object[, options]) method is part of the Node.js util module. 
It is used to return a string representation of an object, suitable for debugging and development purposes.

The first argument, object, is the object you want to inspect. 
The second argument, options, is an optional object that can be used to configure the behavior of the inspection.
*/

const util = require('util');

const obj = {
  name: 'John',
  age: 30
};

const objInspected = util.inspect(obj, { depth: 1 });
console.log(objInspected);          // { name: 'John', age: 30 }
