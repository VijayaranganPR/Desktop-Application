// for...in in object
console.log('for...in in object')

o = {a:1, b:2}
for(const i in o){
    console.log(`property name is ${i}, value is ${o[i]}`)
}
/*
for...in in object
property name is a, value is 1
property name is b, value is 2
*/



console.log()
// for...in in array
console.log('for...in in array')
a = [1,2,3,4]
for(const i in a){
    console.log(`property name is ${i}, value is ${a[i]}`)
}

/*
for...in in array
property name is 0, value is 1
property name is 1, value is 2
property name is 2, value is 3
property name is 3, value is 4
*/



console.log()
// for...in in String
console.log('for...in in String')
a = 'Vijayarangan'
for(const i in a){
    console.log(`property name is ${i}, value is ${a[i]}`)
}
/*
for...in in String
property name is 0, value is V
property name is 1, value is i
property name is 2, value is j
property name is 3, value is a
property name is 4, value is y
property name is 5, value is a
property name is 6, value is r
property name is 7, value is a
property name is 8, value is n
property name is 9, value is g
property name is 10, value is a
property name is 11, value is n
*/