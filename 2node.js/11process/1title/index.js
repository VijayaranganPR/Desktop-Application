/*
The process.title property in Node.js is used to get or set the title of the current process. The title is displayed in the process list of the operating system and can be used to easily identify the process.
*/

const process = require('process')

console.log("current: ", process.title);

process.title = 'newTitle'
console.log("new: ", process.title);

/*
current:  C:\Windows\System32\cmd.exe - node  index.js
new:  newTitle
*/
