/*
Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.


*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    setTimeout(() => {
        win1.minimize()
    }, 3000);
}

app.whenReady().then(createWindow)