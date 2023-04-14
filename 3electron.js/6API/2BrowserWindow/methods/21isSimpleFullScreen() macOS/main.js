/*
Returns boolean - Whether the window is in simple (pre-Lion) fullscreen mode.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setSimpleFullScreen(true)
    console.log(win1.isSimpleFullScreen());         // true
}

app.whenReady().then(createWindow)