/*
Returns boolean - Whether the system is on battery power.

To monitor for changes in this property, use the on-battery and on-ac events.
*/

const {app,BrowserWindow, powerMonitor} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    console.log(powerMonitor.isOnBatteryPower());          // true
}

app.whenReady().then(createWindow)
