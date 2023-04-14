/*

*/

const {isMainThread,Worker,parentPort} = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename)

    worker.on('message', () => {
    console.log(`Main thread worker resource limits: ${JSON.stringify(worker.resourceLimits)}`);

    })
}
else{
    let sum = 0
    for(let i = 1; i<1e9; i++){
        if(i%100000000 === 0){
            parentPort.postMessage('hi')
        }
        sum +=i
    }
}

/*
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
Main thread worker resource limits: {"maxYoungGenerationSizeMb":48,"maxOldGenerationSizeMb":2048,"codeRangeSizeMb":0,"stackSizeMb":4}
*/