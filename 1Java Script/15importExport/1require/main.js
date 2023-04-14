// require will import the file and run once.
// it will also have a return type which will be declared by module.exports = {}

aAddSub = require('./module/aAddSub')
console.log(aAddSub)            // { a: 10, add: [Function: add], sub: [Function: sub] }

bMulDiv = require('./module/bMulDiv')
console.log(bMulDiv)            // { b: 20, mul: [Function: mul], div: [Function: div] }

Class = require('./module/Class')
console.log(Class)
/*
this message is inside Class.js, but will print when you call
{ Address: [class Address] }
*/
ExportingWithModuleExport = require('./module/ExportingWithModuleExport')
console.log(ExportingWithModuleExport)
/*
10
*/
withoutModuleExport = require('./module/withoutModuleExport')
console.log(withoutModuleExport)
/*
this message is inside WithoutModuleExport.js, but will print when you call
{}
*/



// we can still access the name aswell
console.log(a)          // 10
console.log(b)          // 20
console.log(ad)         
/*
Address {
  name: 'Vijayarangan',
  age: 21,
  insidePrint: [Function (anonymous)]
}
*/
