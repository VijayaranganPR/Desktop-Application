/*
Returns boolean - Whether the window will be hidden when the user toggles into mission control.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setHiddenInMissionControl(false)
    console.log(win.isHiddenInMissionControl());         // false
}

app.whenReady().then(createWindow)
