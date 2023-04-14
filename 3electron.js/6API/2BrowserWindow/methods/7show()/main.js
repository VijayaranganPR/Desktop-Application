/*
Shows and gives focus to the window.
*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.hide()
    setTimeout(() => {
        win1.show()         
    }, 3000);
}

app.whenReady().then(createWindow)