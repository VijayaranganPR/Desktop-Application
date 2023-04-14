// for reuseableity of code we use functions
// you can call it from anywhere (before or after declaration) - refer Context/GlobalContext.js


hi();
function hi(){
    console.log("hi someone")
}





// you can also use return to get value from the function
function returnval(){
    return "returned hi"
}

a = returnval();
console.log(a)