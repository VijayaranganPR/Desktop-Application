/*
Hides the window
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.hide()
    setTimeout(() => {
        win1.showInactive()     
    }, 3000);
}

app.whenReady().then(createWindow)