// EvalError

try{
  throw new EvalError('message', {cause: 'cause reason'})
}
catch(e){
  console.log(e.name)
  console.log(e.message)
  console.log(e.cause)
}

/*
EvalError
message
cause reason
*/



console.log(``);
// syntax error

try{
  eval('12)(+xy')
}
catch(e){
  console.log(e.name)
  console.log(e.message)
  console.log(e.cause)
}
/*
syntax error
SyntaxError
Unexpected token ')'
undefined
*/

console.log(``);
// ReferenceError

try{
  eval('(12)+xy')
}
catch(e){
  console.log(e.name)
  console.log(e.message)
  console.log(e.cause)
}
/*
ReferenceError
xy is not defined
undefined
*/



console.log(``);
// RangeError

try{
  throw new RangeError('message', {cause: 'cause reason'})
}
catch(e){
  console.log(e.name)
  console.log(e.message)
  console.log(e.cause)
}
/*
RangeError
message
cause reason
*/



console.log(``);
// TypeError

try{
  null.f()
}
catch(e){
  console.log(e.name)
  console.log(e.message)
  console.log(e.cause)
}
/*
TypeError
Cannot read properties of null (reading 'f')
undefined
*/



console.log(``);
// URIError

try{
  decodeURIComponent('%')
}
catch(e){
  console.log(e.name)
  console.log(e.message)
  console.log(e.cause)
}

/*
URIError
URI malformed
undefined
*/


console.log(``);
// AggregateError

Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  // console.log(e.errors);                    // [ Error: "some error" ]
});




console.log(``);
// custom error
console.log(`custom error`);

class customError extends Error{
    constructor(fromUser,...para ) {
      super(...para)
      this.fromUser = fromUser
      this.name = 'customError'
      this.time = 'Execute panna time'
    }
}

try{
    throw new customError('user message', 'second message', {cause: 'some cause'})
}
catch(e){

    console.log(e.name);
    console.log(e.fromUser)
    console.log(e.message)
    console.log(e.time);
    console.log(e.cause);
}
/*
custom error
customError
user message
second message
Execute panna time
some cause
*/