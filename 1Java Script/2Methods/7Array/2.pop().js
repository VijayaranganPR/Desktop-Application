/**
 * The pop() method removes the last element from an array and returns that element. 
 * This method changes the length of the array.
 * 
 * return undefined if the array is empty.
 * 
 * 
 * The pop() method is a mutating method. It changes the length and the content of this. 
 * In case you want the value of this to be the same, but return a new array with the last element removed,
 * you can use arr.slice(0, -1) instead.
 * 
 * The pop() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties. 
 */

// simple example
console.log('simple example')

a = [1,2,3,4,5]
poped = a.pop()
console.log(a,poped) // [ 1, 2, 3, 4 ] 5



console.log()
// poping undefined value
console.log('poping undefined value')

a = [1,2,3,4,5,,]
poped = a.pop()
console.log(a,poped)  // [ 1, 2, 3, 4, 5 ] undefined



console.log()
// poping in ArrayLike object
console.log('poping in ArrayLike object')

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
poped = Array.prototype.pop.call(arrayLike)
console.log(arrayLike, poped); // { length: 2, unrelated: 'foo' } 4



console.log()
//in an array-like fashion
console.log('in an array-like fashion')

arrayLike2 = {
    length : 0,

    push(...ele){
        Array.prototype.push.call(this, ...ele)
        return this.length;
    },
    pop(){
        poped = Array.prototype.pop.call(this)
        return poped
    }
}

lengthAfterPushed = arrayLike2.push(10, 20, 30);
poped = arrayLike2.pop();
console.log(arrayLike2,lengthAfterPushed,poped)
/**
{
  '0': 10,
  '1': 20,
  length: 2,
  push: [Function: push],
  pop: [Function: pop]
} 3 30
 */