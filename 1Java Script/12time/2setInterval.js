/*
setInterval is used to repeat a function again and again until it reaches a error or clearInterval

to create clearInterval create a reference to the setInterval and pass the reference as parameter to clearInterval

it just postpond the function execution, in the inbetween time other statements will be executed.
*/

function intervel(){
    count +=1
    if(count>5){
      clearInterval(killInterval) 
      return
    }
    
    console.log(count)
    
  }
  count = 0
  
  killInterval = setInterval(intervel,2000)
  console.log('coming after setTimeout but printed before setTimeout')
  // output will be printed with 2 seconds gap
  /*
  coming after setTimeout but printed before setTimeout
  1
  2
  3
  4
  5
*/