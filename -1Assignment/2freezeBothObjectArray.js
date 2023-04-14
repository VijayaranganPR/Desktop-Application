a = {'one':1, 'two': {'one': 2, 'two': {'one': 3, 'two':4}}}
// a = [1,[2,[1,2],3]]


// for freezing both list and object

function freezeDeep(o){
    for(let i of Object.values(o))if(typeof i === 'object')freezeDeep(i)
    Object.freeze(o)
}
freezeDeep(a)
console.log(a)


// console.log(Object.getOwnPropertyDescriptors(a))
// console.log(Object.getOwnPropertyDescriptors(a[1]))
// console.log(Object.getOwnPropertyDescriptors(a[1][1]))


console.log(Object.getOwnPropertyDescriptors(a))
console.log(Object.getOwnPropertyDescriptors(a['two']))
console.log(Object.getOwnPropertyDescriptors(a['two']['two']))
