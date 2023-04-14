/*
Returns Integer - Idle time in seconds

Calculate system idle time in seconds.


*/

const {app,BrowserWindow, powerMonitor} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    console.log(powerMonitor.getSystemIdleTime());          // 1
}

app.whenReady().then(createWindow)
