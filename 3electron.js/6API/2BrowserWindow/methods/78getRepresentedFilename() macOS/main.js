/*
Returns string - The pathname of the file the window represents.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    win.setRepresentedFilename('full.jpg')
    console.log(win.getRepresentedFilename());
}

app.whenReady().then(createWindow)