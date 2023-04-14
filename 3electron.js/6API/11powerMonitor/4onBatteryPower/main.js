/*
A boolean property. True if the system is on battery power.

*/

const {app,BrowserWindow, powerMonitor} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    console.log(powerMonitor.onBatteryPower);          // true
}

app.whenReady().then(createWindow)
