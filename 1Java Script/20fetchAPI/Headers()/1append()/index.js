/*
The append() method of the Headers interface appends a new value onto an existing header inside a Headers object, or adds the header if it does not already exist.

The difference between set() and append() is that if the specified header already exists and accepts multiple values, set() will overwrite the existing value with the new one, whereas append() will append the new value onto the end of the set of values.

For security reasons, some headers can only be controlled by the user agent. These headers include the forbidden header names and forbidden response header names.
*/

const header = new Headers()

// appending values to the header
header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')

console.log(header.get('Accept'))   // application/json
console.log(header.get('Accept-Language'))   // en-US
console.log(header.get('Content-Type'))   // application/json
