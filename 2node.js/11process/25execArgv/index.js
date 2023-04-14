/*
process.execArgv is a property in Node.js that contains an array of arguments passed to the Node.js executable when it was invoked. 
This property is a read-only array of strings that returns the command-line arguments passed to the Node.js executable.


*/

console.log(process.execArgv)
/*
Example 1
C:\Users\prvij\Desktop\Java Script\21node.js\process>node --max-old-space-size=4096 index.js
[ '--max-old-space-size=4096' ]


Example 2
C:\Users\prvij\Desktop\Java Script\21node.js\process>node --harmony index.js
[ '--harmony' ]
*/
