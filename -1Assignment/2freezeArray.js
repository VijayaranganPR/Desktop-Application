a = [1,[2,[1,2],3]]

// for only list
function freezeDeep(o){
    for(let i of o)if(typeof i === 'object')freezeDeep(i)
    Object.freeze(o)
}
freezeDeep(a)

console.log(Object.getOwnPropertyDescriptors(a))
console.log(Object.getOwnPropertyDescriptors(a[1]))
console.log(Object.getOwnPropertyDescriptors(a[1][1]))

