/*
Toggles the visibility of the tab bar if native tabs are enabled and there is only one tab in the current window.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.toggleTabBar()
}

// create the window when app is ready
app.on('ready', createWindow)

