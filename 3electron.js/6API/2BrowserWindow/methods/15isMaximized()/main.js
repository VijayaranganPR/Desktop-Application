/*
Returns boolean - Whether the window is maximized.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.maximize()
    console.log(win1.isMaximized());            // true
    setTimeout(() => {
        win1.unmaximize()
    }, 3000);
}

app.whenReady().then(createWindow)