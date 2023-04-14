let fs = require('fs')


// will rewrite the whole file 
// if the file is not there means it will create a new one
try{
    fs.writeFile('newJSFile', '\nconsole.log("new console appended")')
    console.log('file created')
    
    fs.unlinkSync('newJsFile')
    console.log('file deleted')
    
}
catch(err){
    throw err;
}