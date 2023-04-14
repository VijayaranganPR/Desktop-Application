/*
Returns ProcessMetric[]: Array of ProcessMetric objects that correspond to memory and CPU usage statistics of all the processes associated with the app.
*/

const {app} = require('electron');
console.log(app.getAppMetrics());
app.quit()

/*
[
  {
    cpu: { percentCPUUsage: 0, idleWakeupsPerSecond: 0 },
    pid: 36936,
    type: 'Browser',
    creationTime: 1676291419104.168,
    memory: {
      workingSetSize: 48160,
      peakWorkingSetSize: 48564,
      privateBytes: 22044
    },
    integrityLevel: 'medium',
    sandboxed: false
  }
]
*/