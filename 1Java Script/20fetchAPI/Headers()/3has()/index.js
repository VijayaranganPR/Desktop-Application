/*
The has() method of the Headers interface returns a boolean stating whether a Headers object contains a certain header.

For security reasons, some headers can only be controlled by the user agent. 
These headers include the forbidden header names and forbidden response header names.
*/

const header = new Headers()

header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')

// Checking wheather the header has these headers
console.log(header.has('Accept'))   // true
console.log(header.has('Accept-Language'))   // true
console.log(header.has('Content-Type'))   // true

console.log(header.has('Accept-Encoding'))  // false
