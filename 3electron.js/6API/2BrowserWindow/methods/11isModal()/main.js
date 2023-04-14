/*
Returns boolean - Whether current window is a modal window.

*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    console.log(win1.isModal());            // false
}   

app.whenReady().then(createWindow)