let fs = require('fs')

// change file name before run to have better understanding
fs.copyFile('sourceFile.js', 'destinationFile.js', (err) => {
    if (err) throw err;
    console.log(`file copied successfully`);
})
