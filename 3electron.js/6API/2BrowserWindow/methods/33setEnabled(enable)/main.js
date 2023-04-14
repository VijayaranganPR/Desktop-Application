/*
Disable or enable the window.


*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.setEnabled(false)

    // you can't access for 10 sec
    setTimeout(() => {
        win.setEnabled(true)
    }, 10000);
}

app.whenReady().then(createWindow)
