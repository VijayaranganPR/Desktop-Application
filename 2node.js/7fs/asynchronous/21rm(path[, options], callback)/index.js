/*
fs.rm is used to remove files
*/

const fs = require('fs')

fs.rm('file.txt',(err) => {
    if(err) throw err

    console.log('file removed')
})
/*
file removed
*/