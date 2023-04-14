let fs = require('fs')


// will rewrite the whole file 
// if the file is not there means it will create a new one
fs.appendFile('newJSFile', '\nconsole.log("new console appended")', (err) =>{
    if (err) throw err;
    console.log('text appended')
})
