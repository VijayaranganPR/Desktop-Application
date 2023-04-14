/*
The URLSearchParams[Symbol.iterator]() method is a part of the URLSearchParams API in JavaScript. 
It returns an iterator object that yields the key-value pairs of all the search parameters in the URLSearchParams object.
*/

let params = new URLSearchParams("key1=value1&key2=value2");

for (let [key, value] of params) {
  console.log(`${key}=${value}`);
}

// Output:
// key1=value1
// key2=value2