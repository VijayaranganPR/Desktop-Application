/*
Moves window to the center of the screen.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setPosition(10, 20, true) 
    setTimeout(() => {
        win1.center()
    }, 3000);           
}

app.whenReady().then(createWindow)
