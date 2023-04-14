/* 
setTimeout have trust issues 

in this example we set the setTimeout to print 'Printed right after global execution context completed' after 5 sec

but what if the below setTimeout declaration runs more than 5 sec

the timer will start once it reaches the setTimeout declaration

it will print the 'Printed right after global execution context completed' right after the execution completed

in this example 5000ms is just the minimum time
it won't execute if 5000ms is completed.
*/
console.log('start')

setTimeout(() => console.log('Printed right after global execution context completed'), 5000)

console.log('end')

// below code will run for 10 sec.
startTime = new Date().getTime()
endTime = startTime 
while(endTime< startTime +10000){
    endTime = new Date().getTime();
}

console.log('code for 10 sec is completed')
/*
start
end
code for 10 sec is completed
Printed right after global execution context completed
*/