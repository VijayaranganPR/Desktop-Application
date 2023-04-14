/*
Returns Integer[] - Contains the window's current position.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setPosition(10, 20, true) 
    console.log(win1.getPosition());            // [ 10, 20 ]   
}

app.whenReady().then(createWindow)
