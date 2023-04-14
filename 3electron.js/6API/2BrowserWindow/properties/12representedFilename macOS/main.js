/*
A string property that determines the pathname of the file the window represents, 
and the icon of the file will show in window's title bar.

*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.representedFilename);
}

app.whenReady().then(createWindow)

