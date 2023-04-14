/*
fs.access() is a method in Node.js that is used to check the accessibility of a file or directory at the specified path. 

The mode argument is an optional integer that specifies the accessibility checks to be performed. 
The callback function is called with an error argument if the file or directory is not accessible.

Tests a user's permissions for the file or directory specified by path. 
The mode argument is an optional integer that specifies the accessibility checks to be performed. 
mode should be either the value fs.constants.F_OK or a mask consisting of the bitwise OR of any of fs.constants.R_OK, fs.constants.W_OK, and fs.constants.X_OK 
(e.g. fs.constants.W_OK | fs.constants.R_OK). Check File access constants for possible values of mode.


*/

const fs = require('fs')

fs.access('newfile.txt', (err) => {
    if(err) throw err
    console.log('file exist')
})



/*
file exist
*/