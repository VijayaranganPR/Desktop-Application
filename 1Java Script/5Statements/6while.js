// simple while 
console.log('simple while')

let sum = 0;
let i = 0;
a = [1,2,3,4,5]
while(i<a.length){
    sum += a[i]
    i++
}
console.log(sum)

/*
simple while
15
*/



console.log()
// true while
console.log('true while')

let sum1 = 0;
let i1 = 0;
a = [1,2,3,4,5]
while(true){
    if (i1<a.length){
        sum1 += a[i1]
        i1++
    }
    else{
        break
    }
}
console.log(sum1)

/*
true while
15
*/