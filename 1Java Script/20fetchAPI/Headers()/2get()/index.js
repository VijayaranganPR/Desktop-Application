/*
The get() method of the Headers interface returns a byte string of all the values of a header within a Headers object with a given name. If the requested header doesn't exist in the Headers object, it returns null.

For security reasons, some headers can only be controlled by the user agent. These headers include the forbidden header names and forbidden response header names.

*/

const header = new Headers()

header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')

// getting values by their key using get()
console.log(header.get('Accept'))   // application/json
console.log(header.get('Accept-Language'))   // en-US
console.log(header.get('Content-Type'))   // application/json
