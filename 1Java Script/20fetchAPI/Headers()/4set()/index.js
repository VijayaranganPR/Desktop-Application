/*
The set() method of the Headers interface sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.

The difference between set() and Headers.append is that if the specified header already exists and accepts multiple values, set() overwrites the existing value with the new one, whereas Headers.append appends the new value to the end of the set of values.

For security reasons, some headers can only be controller by the user agent. These headers include the forbidden header names and forbidden response header
*/

const header = new Headers()

header.append('Content-Type', 'application/json')

// setting new value to header Content-Type
header.set('Content-Type', 'application/json')

console.log(header.get('Content-Type'))     // application/json
