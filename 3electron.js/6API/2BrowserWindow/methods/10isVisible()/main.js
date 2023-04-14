/*
Returns boolean - Whether the window is visible to the user.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.hide()
    console.log(win1.isVisible())               // false
    setTimeout(() => {
        win1.showInactive()    
        console.log(win1.isVisible())           // true
    }, 3000);
}

app.whenReady().then(createWindow)