/*
A boolean property that determines whether the window has a shadow.


*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.shadow);            // false
}

app.whenReady().then(createWindow)

