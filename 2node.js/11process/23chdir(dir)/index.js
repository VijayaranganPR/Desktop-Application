/*
The process.chdir() method changes the current working directory of the Node.js process or throws an exception 
if doing so fails (for instance, if the specified directory does not exist).
*/

const process =  require('process');
process.chdir('C:/Users/prvij/Desktop/')
console.log('directory changed')
/*
directory changed
C:\Users\prvij\Desktop
*/
console.log(process.cwd())
