/*
Moves window to top(z-order) regardless of focus

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    const win2 = new BrowserWindow()
    win1.loadFile('first.html')
    win2.loadFile('second.html')
    win1.moveTop()            
}

app.whenReady().then(createWindow)
