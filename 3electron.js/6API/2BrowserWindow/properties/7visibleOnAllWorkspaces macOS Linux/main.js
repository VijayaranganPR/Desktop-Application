/*
A boolean property that determines whether the window is visible on all workspaces.

Note: Always returns false on Windows.

*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.visibleOnAllWorkspaces);            // false
}

app.whenReady().then(createWindow)

