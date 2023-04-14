/*
win.kiosk is a property in Electron.js that allows you to create a kiosk application. 
When win.kiosk is set to true, it opens the window without any window borders or controls and makes it full screen, 
so the application can only be exited by a keyboard shortcut or other methods.

*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.menuBarVisible);            // true
}

app.whenReady().then(createWindow)

