let fs = require('fs')

// change file name before run to have better understanding
fs.rename('newJSFile', 'NameChanged', (err) => {
    if (err) throw err;
    console.log('name changed')
})
