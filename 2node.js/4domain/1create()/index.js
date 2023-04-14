/*
domain.create() is a method in the Node.js Domain module that creates a new domain object. 
A domain is a way to manage multiple asynchronous operations as a single group. 

When an error occurs in a domain, it will be emitted by the domain object, and can be handled in a central place.
*/
const fs = require('fs')
const domain = require('domain')

const d = domain.create()

d.on('error', (err) => {
    console.log(`Caught Error: ${err}`)
})


// if the file exist it will run normally
d.run(() => {
    fs.readFile('nonExisting file.txt', (err, data) => {
        if(err) throw err

        console.log(data)
    })
})


/*
Caught Error: Error: ENOENT: no such file or directory, open 'C:\Users\prvij\Desktop\Java Script\21node.js\domain\domain.create()\nonExisting file.txt'
*/