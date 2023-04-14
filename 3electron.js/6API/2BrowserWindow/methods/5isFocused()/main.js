/*
Returns boolean - Whether the window is focused.

*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    const win2 = new BrowserWindow() 

    win1.loadFile('first.html')
    win2.loadFile('second.html')
    // after 3 sec the window 1 will come to frount
    setTimeout(() => {
        console.log(win2.isFocused());          // true
        win1.focus()
        console.log(win1.isFocused());          // true
    }, 3000);
}

app.whenReady().then(createWindow)