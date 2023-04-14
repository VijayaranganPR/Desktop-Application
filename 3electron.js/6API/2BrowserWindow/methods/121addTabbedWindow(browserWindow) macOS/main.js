/*
browserWindow BrowserWindow
Adds a window as a tab on this window, after the tab for the window instance.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    const win2 = new BrowserWindow()
    win2.loadFile('second.html')
    win.addTabbedWindow(win2)
}

// create the window when app is ready
app.on('ready', createWindow)

