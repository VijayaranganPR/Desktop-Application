/*
fs.lchown is a method in Node.js that allows you to change the owner and group of a symbolic link (also known as a soft link or symlink). The method takes the following arguments:

path: The file path of the symbolic link you want to modify the owner and group of.
uid: The user ID of the new owner of the symbolic link.
gid: The group ID of the new group of the symbolic link.
callback: A callback function that will be called once the owner and group have been updated. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.link('file.txt', 'newLink', (err) => {
    if(err) throw err
    console.log('new link created')
})

fs.lchown('newLink', 1000, 1000, (err) => {
    if(err) throw err
    console.log(`symbolic link owner and group changed`);
})    

/*
symbolic link owner and group changed
new link created
*/

/*
symbolic link owner and group changed
*/