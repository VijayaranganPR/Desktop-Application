/*
A boolean property that determines whether the window menu bar should hide itself automatically. 
Once set, the menu bar will only show when users press the single Alt key.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    // menuBar will be hidden
    win.autoHideMenuBar = true
}

app.whenReady().then(createWindow)

