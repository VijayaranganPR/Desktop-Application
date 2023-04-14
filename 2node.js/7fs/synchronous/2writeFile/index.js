let fs = require('fs')


// will rewrite the whole file 
// if the file is not there means it will create a new one

try{
    fs.writeFileSync('newJSFile', 'console.log("newJSFile added")', 'utf8')
    console.log('data written successfully')
}
catch(err){
    throw err;
}