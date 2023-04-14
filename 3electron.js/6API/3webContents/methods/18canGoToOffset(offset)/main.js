/*
offset Integer
Returns boolean - Whether the web page can go to offset.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        let currentOffset = win.webContents.getURL().length
        console.log(currentOffset)                                                      // 23
        let canGoBack = win.webContents.canGoToOffset(currentOffset - 10)
        let canGoForward = win.webContents.canGoToOffset(currentOffset + 10)
        
        console.log(`Can go back: ${canGoBack}`)                                        // Can go back: false
        console.log(`Can go forward: ${canGoForward}`)                                  // Can go forward: false
    })
      
}
app.whenReady().then(createWindow)
