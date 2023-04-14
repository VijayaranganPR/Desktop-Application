/*
win.focusOnWebView() is a method in the Electron framework that focuses on the web page content of a window's currently focused webContents. 
This method is useful when you have a window with multiple webContents instances, and you want to programmatically focus on one of them.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', () => {
        // Focus on the web page content
        win.focusOnWebView()
    })
}

app.whenReady().then(createWindow)