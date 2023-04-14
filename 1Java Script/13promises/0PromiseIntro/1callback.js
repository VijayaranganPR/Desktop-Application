/*CALL BACK is a function that is passed into another function as a parameter then invoked by that other function
A higher order function is a function that accept a callback as a parameter
What are callbacks used for?
* Advanced Array Methods
* Browser events
* AJAX Requests
* React Development
*/

// basic example
console.log(`basic example`);

function callback(name){
    return `Hi I am ${name}`
}

function higherOrder(name, callback){
    return `Good morning, ${callback(name)}`
}

console.log(higherOrder('vijay',callback))



console.log(``);
// callback with anonymous function
console.log(`callback with anonymous function`);
function higherOrder1(name, callback1){
    return `Good morning, ${callback1(name)}`
};
console.log(higherOrder1('vijay', function (name){return `Hi I am ${name}`}))


console.log(``);
// in array methods
console.log(`in array methods`);

console.log(['vijay', 'sakthi', 'shanu'].map(callback))

