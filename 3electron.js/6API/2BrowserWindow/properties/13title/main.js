/*
A string property that determines the title of the native window.

Note: The title of the web page can be different from the title of the native window.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.title);                     // hello-world
}

app.whenReady().then(createWindow)

