// simple for loop
console.log('simple for loop')

for (let i= 0; i<6; i++){
    console.log(i)
}

/*
simple for loop
0
1
2
3
4
5
*/



console.log()
// making a empty for loop
console.log('making a empty for loop')

let j = 0
for(;;){
    if (j>5){
        break
    }
    else{
        console.log(j)
        j++
    }
    
}

/*
making a empty for loop
0
1
2
3
4
5
*/