a = [1,[2,[1,2],3]]
// for only Array

function freezeDeep(o){
    for(let i of Object.values(o))if(typeof i === 'object')freezeDeep(i)
    Object.freeze(o)
}
freezeDeep(a)
// console.log(Object.getOwnPropertyDescriptors(a))
// console.log(Object.getOwnPropertyDescriptors(a[1]))
// console.log(Object.getOwnPropertyDescriptors(a[1][1]))


// unfreesing code for array starts here
function unfreezeDeep(o){
    let temp = []
    for (let i of o)temp.push((typeof i === 'object')?unfreezeDeep(i):i)
    return temp
}
a = unfreezeDeep(a)
console.log(Object.getOwnPropertyDescriptors(a))
console.log(Object.getOwnPropertyDescriptors(a[1]))
console.log(Object.getOwnPropertyDescriptors(a[1][1]))
