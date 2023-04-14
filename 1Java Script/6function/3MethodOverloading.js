/*
Method overloading is not possible in JavaScript

if you try to do method overloading means it will implement the last updated version of the method.
*/



function sum(a,b){
    console.log(a+b);
}

function sum(name){
    console.log(`hello ${name}`);
}
sum('vijay')
sum(10,20);

/*
hello vijay
hello 10
*/