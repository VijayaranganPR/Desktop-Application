let fs = require('fs')

// change file name before run to have better understanding
try {
    fs.copyFileSync('sourceFile.js', 'destinationFile.js')
    console.log(`file copied successfully`);
} catch (err) {
    throw err;
}
