/*
mediaSourceId string - Window id in the format of DesktopCapturerSource's id. For example "window:1869:0".
Moves window above the source window in the sense of z-order. 
If the mediaSourceId is not of type window or if the window does not exist then this method throws an error.
*/
const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    const win2 = new BrowserWindow()
    win1.loadFile('first.html')
    win2.loadFile('second.html')
    win1.moveAbove(win2.getMediaSourceId())            
}

app.whenReady().then(createWindow)
