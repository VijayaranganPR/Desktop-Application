
// Break label example
console.log('Break label example')

i = 0
outerloop:
while(i<5){
    i++
    innerloop:
    for(let j= 0; j<5;j++){
        if (j == 2){
            break innerloop
        }
        if (i == 3){
            break outerloop
        }
        console.log(`j value is ${j} and i value is ${i}`)
    }
    
}

/*
Break label example
Break label example
j value is 0 and i value is 1
j value is 1 and i value is 1
j value is 0 and i value is 2
j value is 1 and i value is 2
*/



console.log()
// continue label example
console.log('continue label example')


i = 0
outerloop:
while(i<5){
    i++
    innerloop:
    for(let j= 0; j<5;j++){
        if (j == 2){
            continue innerloop
        }
        if (i == 3){
            continue outerloop
        }
        console.log(`j value is ${j} and i value is ${i}`)
    }
    
}

/*
continue label example
j value is 0 and i value is 1
j value is 1 and i value is 1
j value is 3 and i value is 1
j value is 4 and i value is 1
j value is 0 and i value is 2
j value is 1 and i value is 2
j value is 3 and i value is 2
j value is 4 and i value is 2
j value is 0 and i value is 4
j value is 1 and i value is 4
j value is 3 and i value is 4
j value is 4 and i value is 4
j value is 0 and i value is 5
j value is 1 and i value is 5
j value is 3 and i value is 5
j value is 4 and i value is 5
*/