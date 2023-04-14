/*
fs.watch() is a Node.js file system API that watches for changes to a file or directory and triggers a callback function whenever a change is detected.

It takes one to three arguments:

filename: A string that specifies the path to the file or directory to be watched.
options (optional): An object that specifies the options for the watch operation. This can include the persistent option, which determines whether the file system should continue to watch the file or directory even if there are no more references to the fs.FSWatcher object returned by watch, and the encoding option, which specifies the encoding to be used for the data passed to the callback function.
listener (optional): A function that is called when a change is detected. It takes two arguments: (eventType, filename), where eventType is a string indicating the type of change that occurred (either rename or change), and filename is the name of the file or directory that was changed.

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