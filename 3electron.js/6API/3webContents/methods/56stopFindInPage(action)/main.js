/*
action string - Specifies the action to take place when ending [webContents.findInPage] request.
clearSelection - Clear the selection.
keepSelection - Translate the selection into a normal selection.
activateSelection - Focus and click the selection node.
Stops any findInPage request for the webContents with the provided action.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    
    setTimeout(() => {
        win.webContents.findInPage('google')
    }, 3000);

    setTimeout(() => {
        win.webContents.stopFindInPage('clearSelection')
    }, 6000);
}

app.whenReady().then(createWindow)
