// simple throw
console.log(`simple throw`);

// throw new Error('some error')     // Error: some error

console.log(``);
// custom error
console.log(`custom error`);

function CustomError(message){
  this.name = 'CustomError'
  this.message = message
}

try{
  throw new CustomError('Error vandhuduchu')
}
catch(e){
  console.log(e.name);
  console.log(e.message)
}
/*
custom error
CustomError
Error vandhuduchu
*/