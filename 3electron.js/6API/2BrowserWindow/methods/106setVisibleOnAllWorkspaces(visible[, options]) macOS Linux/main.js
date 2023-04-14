/*
visible boolean
options Object (optional)
visibleOnFullScreen boolean (optional) macOS - Sets whether the window should be visible above fullscreen windows.
skipTransformProcessType boolean (optional) macOS - Calling setVisibleOnAllWorkspaces will by default transform the process type between UIElementApplication and ForegroundApplication to ensure the correct behavior. However, this will hide the window and dock for a short time every time it is called. If your window is already of type UIElementApplication, you can bypass this transformation by passing true to skipTransformProcessType.
Sets whether the window should be visible on all workspaces.

Note: This API does nothing on Windows.

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