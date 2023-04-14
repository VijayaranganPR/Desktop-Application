/*
closable boolean
Sets whether the window can be manually closed by user. On Linux does nothing.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setClosable(false)
    console.log(win.isClosable());         // false
}

app.whenReady().then(createWindow)
