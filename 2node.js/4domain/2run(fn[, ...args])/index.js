/*
The domain.run method in Node.js is used to run a function within the context of a domain, 
providing an alternative way to enter a domain and handle errors within the domain.

In Node.js, domains provide a way to handle errors in a controlled and isolated environment, 
and the run method is used to run a function within this environment.
*/

const domain = require('domain')
const fs = require('fs');

const d = domain.create()
d.on('error', (error) => {
    console.log(`caught error by domain: ${error}`);
}) 

d.run(() => {
    fs.readFile('file.txt', 'utf-8', function(error, data) {
        if (error) {
          throw error;
        } else {
          console.log(data);
        }
  })
}
)

/*
caught error by domain: Error: ENOENT: no such file or directory, open 'C:\Users\prvij\Desktop\Java Script\21node.js\domain\domain.run(fn[, ...args])\file.txt'
*/