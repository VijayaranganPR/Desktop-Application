/*
Try to close all windows. The before-quit event will be emitted first. 
If all windows are successfully closed, the will-quit event will be emitted and by default the application will terminate.

This method guarantees that all beforeunload and unload event handlers are correctly executed. 
It is possible that a window cancels the quitting by returning false in the beforeunload event handler.
*/

const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}

app.on('ready', () => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows.length === 0)
        createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    app.quit()
})
