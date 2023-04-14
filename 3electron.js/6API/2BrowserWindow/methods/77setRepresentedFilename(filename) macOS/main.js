/*
filename string
Sets the pathname of the file the window represents, and the icon of the file will show in window's title bar.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    win.setRepresentedFilename('full.jpg')
}

app.whenReady().then(createWindow)