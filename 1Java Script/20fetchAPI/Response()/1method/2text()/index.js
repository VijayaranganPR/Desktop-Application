/*
The text() method of the Request interface reads the request body and returns it as a promise that resolves with a String. 
The response is always decoded using UTF-8.

*/

fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => )