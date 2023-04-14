/*
Returns boolean - Whether the window can be manually closed by user.

On Linux always returns true.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setClosable(false)
    console.log(win.isClosable());         // false
}

app.whenReady().then(createWindow)
