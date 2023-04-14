/*
Returns boolean - Whether the window is visible on all workspaces.

Note: This API always returns false on Windows.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setVisibleOnAllWorkspaces(true)
    console.log(mainWindow.isVisibleOnAllWorkspaces());        // true
    setTimeout(() => {
        mainWindow.setVisibleOnAllWorkspaces(false)
    console.log(mainWindow.isVisibleOnAllWorkspaces());        // false
}, 3000);
    
}



// create the window when app is ready
app.on('ready', createWindow)