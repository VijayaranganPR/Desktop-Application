// for...of in object
// you can't iterate through the object using for...of convert it to a array then iterate
console.log('for...in in object')

o = {a:1, b:2}
for([key, value] of Object.entries(o)){
    console.log(`property name is ${key}, value is ${value}`)
}
/*
for...in in object
property name is a, value is 1
property name is b, value is 2
*/



console.log()
// for...of in array
console.log('for...of in array')
a = [1,2,3,4]
for(i of a){
    console.log(`value is ${i}`)
}

/*
for...of in array
value is 1
value is 2
value is 3
value is 4
*/



console.log()
// for...of in String
console.log('for...of in String')
a = 'Vijayarangan'
for(i of a){
    console.log(`value is ${i}`)
}
/*
for...of in String
value is V
value is i
value is j
value is a
value is y
value is a
value is r
value is a
value is n
value is g
value is a
value is n
*/