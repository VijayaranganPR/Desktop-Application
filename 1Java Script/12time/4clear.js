// It's worth noting that the pool of IDs used by setTimeout() and setInterval() are shared, 
// which means you can technically use clearTimeout() and clearInterval() interchangeably. 
// However, for clarity, you should avoid doing so.

returnedtimeout = setTimeout(()=> console.log('timeout'), 5000)
returnedInterval = setInterval(() => console.log('interval'), 1000)
clearTimeout(returnedInterval)
clearInterval(returnedtimeout)