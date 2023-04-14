/*
fs.unwatchFile() is a Node.js file system API that stops watching for changes to a file or directory that was previously being watched by the fs.watchFile() function.

It takes one or two arguments:

filename: A string that specifies the path to the file or directory that was being watched.
listener (optional): The callback function that was passed to fs.watchFile() when the file or directory was first watched. If this argument is not specified, all listeners for the file or directory will be removed.

*/


const fs = require('fs')
const listener = (eventType, fileName) => {
    console.log(`event type is ${eventType}`)

    if(fileName){
        console.log(`file name is ${fileName}`);
    }
    else{
        console.log(`file name not provided`);
    }
}


fs.watch('file.txt', listener)

fs.writeFile('file.txt', 'Hello World', (err) => {
    if(err) throw err
    console.log('file written')
})
fs.unwatchFile('file.txt', listener)
/*
event type is change
file name is file.txt
event type is change
file name is file.txt
file written
event type is change
file name is file.txt
*/