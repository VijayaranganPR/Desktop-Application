/*
win.documentEdited is a property in Electron.js that is used to determine whether a macOS window has unsaved changes or not. 
When set to true, it displays a small dot in the window's close button to indicate that there are unsaved changes.

The icon in title bar will become gray when set to true.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.documentEdited);            // false
}

app.whenReady().then(createWindow)

