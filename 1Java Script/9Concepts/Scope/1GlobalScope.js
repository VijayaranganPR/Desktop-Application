// Global scope: The default scope for all code running in script mode.

const globalVariable = 1;
function innerFunction(){
    console.log(`globalVariable is ${globalVariable}`)
}
innerFunction()
// console.log(globalThis) we can see globalVariable global this
/*
globalVariable is 1
*/

export {globalVariable} // for module scope