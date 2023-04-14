/*
process.exit([code]) is a method in Node.js that causes the Node.js process to exit immediately with the specified exit code. 
The exit code is an optional argument that can be an integer value between 0 and 255. 
If no exit code is provided, the process exits with a code of 0, which typically indicates success.

It's important to note that when a Node.js process exits, it will terminate any remaining event loops and any other operations that are in progress will not be completed. 
Also, it's good practice to use the exit event to perform any necessary cleanup before the process exits.

*/

someCondition = 10>3
if (someCondition) {
    console.log("Exiting with code 1");
    process.exit(1);
}
console.log("Exiting with code 0");     // this won't execute
process.exit(0);

/*
Exiting with code 1
*/