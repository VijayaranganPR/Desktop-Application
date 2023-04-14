/*
Focuses on the window.

*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    const win2 = new BrowserWindow() 

    win1.loadFile('first.html')
    win2.loadFile('second.html')
    // after 3 sec the window 1 will come to frount
    setTimeout(() => {
        win1.focus()
    }, 3000);
}

app.whenReady().then(createWindow)