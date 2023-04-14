let first = 10;
var second = 20;

export {first, second}
export default await new Promise((resolve) => setTimeout(resolve, 2000, 'resolved in 2 sec'))
console.log('inside export1')