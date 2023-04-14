/*
The delete() method of the Headers interface deletes a header from the current Headers object.

This method throws a TypeError for the following reasons:
    - The value of the name parameter is not the name of an HTTP header.
    - The value of Guard is immutable.

For security reasons, some headers can only be controlled by the user agent. These headers include the forbidden header names and forbidden response header names.

*/

const header = new Headers()

header.append('Content-Type', 'application/json')
console.log(header.has('Content-Type'))     // true

// deleting the value to header Content-Type
header.delete('Content-Type')
console.log(header.has('Content-Type'))     // false


// deleting not presented value
header.delete('Accept')         // no error
console.log(header.has('Accept'))     // false
