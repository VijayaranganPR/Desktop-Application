/*
win.blurWebView() is a method in the Electron framework that blurs the web page content of a window's currently focused webContents. 
This method is useful when you want to programmatically remove focus from the web page content of a window, for example, 
if you want to allow the user to interact with other parts of the application.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', () => {
        // Blur the web page content
        win.blurWebView()
  })
}

app.whenReady().then(createWindow)