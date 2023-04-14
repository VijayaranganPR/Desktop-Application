/*
A boolean property that determines whether the window can be manually resized by user.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.resizable);                     // true
}

app.whenReady().then(createWindow)

