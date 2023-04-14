/*
Returns boolean - Whether the window is destroyed.

*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()

    setTimeout(() => {
        win1.destroy()
        console.log(win1.isDestroyed());                // true
    }, 3000);
}

app.whenReady().then(createWindow)