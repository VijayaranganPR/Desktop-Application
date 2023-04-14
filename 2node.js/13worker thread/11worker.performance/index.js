/*

*/

const {isMainThread, Worker, parentPort} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename,)
    console.log(worker.performance.eventLoopUtilization())

    worker.on('message', () => {
    console.log(worker.performance.eventLoopUtilization())

    })

    worker.on('exit', () => {
    console.log(worker.performance.eventLoopUtilization())

    })

}
else{
    let sum = 0;
    for(let i = 1; i<1e9; i++){
        sum +=i
        if(i%100000000 === 0){
            parentPort.postMessage('hi')
        }
    }
}

/*
{ idle: 0, active: 0, utilization: 0 }
{ idle: 0, active: 360.8187001083374, utilization: 1 }
{ idle: 0, active: 481.96930006484985, utilization: 1 }
{ idle: 0, active: 601.2346999977112, utilization: 1 }
{ idle: 0, active: 720.1518000696183, utilization: 1 }
{ idle: 0, active: 838.7147000167847, utilization: 1 }
{ idle: 0, active: 957.4458000991822, utilization: 1 }
{ idle: 0, active: 1076.1888000104905, utilization: 1 }
{ idle: 0, active: 1194.9900000427247, utilization: 1 }
{ idle: 0, active: 1315.6493000123978, utilization: 1 }
{ idle: 0, active: 0, utilization: 0 }
*/