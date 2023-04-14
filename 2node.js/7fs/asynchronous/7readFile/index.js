let fs = require('fs')

fs.readFile('newTextFile', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data)
})
