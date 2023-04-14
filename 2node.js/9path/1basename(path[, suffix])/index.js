/*
The path.basename method in Node.js is used to return the last portion of a file path, similar to the Unix basename command. 
It takes a path as its first argument and an optional suffix as the second argument, and returns the base name of the file, with the suffix removed if specified. 
For example, path.basename('/foo/bar/baz/qux.html', '.html') would return 'qux'.
*/


const path = require('path')
const filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.basename(path[, suffix])\\index.js'


// getting base name
console.log(path.basename(filePath))        // index.js

// getting base name without suffix
console.log(path.basename(filePath,'.js'))  // index

/*
index.js
index
*/