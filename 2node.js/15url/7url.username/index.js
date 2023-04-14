/*
url.username is a property of the URL object in JavaScript that represents the username component of a URL, if present.

The username component of a URL is used to specify a username for authentication purposes, 
and is followed by the password component of the URL, separated by a colon :.
*/

const url = new URL('https://user:pass@www.example.com/page')

console.log(url.username)       // user

url.username = 'newuser'

console.log(url.href)           // https://newuser:pass@www.example.com/page
