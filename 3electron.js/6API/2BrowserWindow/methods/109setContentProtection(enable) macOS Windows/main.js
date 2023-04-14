/*
enable boolean
Prevents the window contents from being captured by other apps.

On macOS it sets the NSWindow's sharingType to NSWindowSharingNone. On Windows it calls SetWindowDisplayAffinity with WDA_EXCLUDEFROMCAPTURE. For Windows 10 version 2004 and up the window will be removed from capture entirely, older Windows versions behave as if WDA_MONITOR is applied capturing a black window.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setContentProtection(true)
    
}



// create the window when app is ready
app.on('ready', createWindow)