/*
url.searchParams is a property of the URL object in JavaScript that represents the query parameters of a URL as a URLSearchParams object.

The query parameters of a URL are the parameters that are specified in the search component of the URL, 
and are used to provide additional information about the resource being requested.

The searchParams property allows you to easily retrieve, add, modify, and delete query parameters in a URL.
*/

const url = new URL('https://www.example.com/page?key=value')

console.log(url.searchParams)       // URLSearchParams { 'key' => 'value' }


// appending
url.searchParams.append('newkey', 'newvalue')

console.log(url.searchParams)       // URLSearchParams { 'key' => 'value', 'newkey' => 'newvalue' }
console.log(url.href)               // https://www.example.com/page?key=value&newkey=newvalue


// setting
url.searchParams.set('key', 'newvalue')

console.log(url.searchParams)       // URLSearchParams { 'key' => 'newvalue', 'newkey' => 'newvalue' }
console.log(url.href)               // https://www.example.com/page?key=newvalue&newkey=newvalue


// deleting
url.searchParams.delete('newkey')

console.log(url.searchParams)       // URLSearchParams { 'key' => 'newvalue' }
console.log(url.href)               // https://www.example.com/page?key=newvalue

