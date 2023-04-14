/*
url.password is a property of the URL object in JavaScript that represents the password component of a URL, if present.

The password component of a URL is specified as part of the userinfo component of a URL, 
which is preceded by the @ symbol and includes both the username and password components. 

For example, in the URL https://user:password@www.example.com/page, the userinfo component is user:password and the password component is password.
*/

const url = new URL('https://user:password@www.example.com/page')

console.log(url.password)       // password

url.password = 'newpassword'

console.log(url.href)           // https://user:newpassword@www.example.com/page
