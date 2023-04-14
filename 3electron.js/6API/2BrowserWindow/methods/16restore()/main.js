/*
Restores the window from minimized state to its previous state.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.maximize()
    setTimeout(() => {
        win1.restore()
    }, 3000);
}

app.whenReady().then(createWindow)