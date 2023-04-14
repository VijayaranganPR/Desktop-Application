/*
The URLSearchParams.values() method is a part of the URLSearchParams API in JavaScript. 
It returns an iterator object that yields the values of all the search parameters in the URLSearchParams object.
*/

let params = new URLSearchParams("key1=value1&key2=value2");

for (let value of params.values()) {
  console.log(value);
}

/*
value1
value2
*/