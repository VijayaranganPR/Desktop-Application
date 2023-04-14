/*
Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.maximize()
    setTimeout(() => {
        win1.unmaximize()
    }, 3000);
}

app.whenReady().then(createWindow)