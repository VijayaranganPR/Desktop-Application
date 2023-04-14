/*
The Headers.forEach() method executes a callback function once per each key/value pair in the Headers object.

// Arrow function
forEach((value, key) => { … })
forEach((value, key, object) => { … })

// Inline callback function
forEach(function (value, key) { … })
forEach(function (value, key, object) { … })
forEach(function (value, key) { … }, thisArg)

*/

const header = new Headers()

// appending values to the header
header.append('Accept', 'application/json')
header.append('Accept-Language', 'en-US')
header.append('Content-Type', 'application/json')

header.forEach((value, key) => console.log(`${key} ==> ${value}`))

