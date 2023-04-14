let fs = require('fs')


// will rewrite the whole file 
// if the file is not there means it will create a new one
fs.writeFile('newJSFile', 'console.log("newJSFile added")', (err) =>{
    if (err) throw err;
    console.log('file Overridden')
})
