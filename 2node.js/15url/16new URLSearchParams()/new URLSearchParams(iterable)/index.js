/*
Instantiate a new URLSearchParams object with an iterable map in a way that is similar to Map's constructor. 
iterable can be an Array or any iterable object. That means iterable can be another URLSearchParams, 
in which case the constructor will simply create a clone of the provided URLSearchParams. 
Elements of iterable are key-value pairs, and can themselves be any iterable object.
*/

let params = new URLSearchParams([
    ['user', 'abc'],
    ['query', 'first'],
    ['query', 'second'],
]);
console.log(params.toString());             // user=abc&query=first&query=second