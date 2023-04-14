const start = Date.now()
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  console.log(fibonacci(40));
const end = Date.now()
console.log('time taken = '+ ((end-start)/ 1000) +' sec')
/*
time taken = 1.706 sec
*/