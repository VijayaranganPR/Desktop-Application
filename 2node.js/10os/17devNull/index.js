/*
The platform-specific file path of the null device.

\\.\nul on Windows
/dev/null on POSIX
*/
const os = require('os')
console.log(os.devNull)  


/*
\\.\nul
*/
