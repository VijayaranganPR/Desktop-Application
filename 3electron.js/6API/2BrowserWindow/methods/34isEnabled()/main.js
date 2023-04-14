/*
Returns boolean - whether the window is enabled.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.setEnabled(false)
    console.log(win.isEnabled());               // false
    // you can't access for 10 sec
    setTimeout(() => {
        win.setEnabled(true)
        console.log(win.isEnabled());           // true
}, 10000);
}

app.whenReady().then(createWindow)
