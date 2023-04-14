/*
Shows the window but doesn't focus on it.
*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.hide()
    setTimeout(() => {
        win1.showInactive()     
    }, 3000);
}

app.whenReady().then(createWindow)