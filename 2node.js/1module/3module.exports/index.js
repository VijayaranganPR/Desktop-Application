/*
module.exports is a property in Node.js that represents the exports of a module. 
It is used to export values and objects from a module so that they can be used in other parts of your application.
*/

const addFunction = require('./module')
console.log(addFunction.add(10, 20));   // 30