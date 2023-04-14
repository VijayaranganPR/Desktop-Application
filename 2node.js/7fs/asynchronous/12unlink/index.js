let fs = require('fs')


// will rewrite the whole file 
// if the file is not there means it will create a new one
fs.writeFile('newJSFile', '\nconsole.log("new console appended")', (err) =>{
    if (err) throw err;
    console.log('file created')
})

fs.unlink('newJsFile',(err) => {
    if (err) throw err;
    console.log('file deleted')
})
