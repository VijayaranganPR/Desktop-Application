/*
idleThreshold Integer
Returns string - The system's current state. Can be active, idle, locked or unknown.

Calculate the system idle state. idleThreshold is the amount of time (in seconds) before considered idle. locked is available on supported systems only.

*/

const {app,BrowserWindow, powerMonitor} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    console.log(powerMonitor.getSystemIdleState(1));          // active
}

app.whenReady().then(createWindow)
