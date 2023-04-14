a = [1,[2,[1,2],3]]

// for freezing both list and object
b = []
function deepFlat(o){
    let temp = (typeof o === 'object')?{}:[]
    for (let i of o)(typeof i === 'object')?deepFlat(i):b.push(i)
}
deepFlat(a)

console.log(b)
