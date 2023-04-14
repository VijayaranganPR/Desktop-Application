let fs = require('fs')


// will append file 
// if the file is not there means it will create a new one

try{
    fs.appendFileSync('newJSFile', '\nconsole.log("new console appended")')
    console.log('text appended successfully')
}
catch(err){
    throw err;
}