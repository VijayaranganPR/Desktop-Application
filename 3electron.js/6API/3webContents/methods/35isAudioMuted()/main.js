/*
Returns boolean - Whether this page has been muted.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.youtube.com/watch?v=X1HOCvfPmQg')
    const content = win.webContents

    content.on('did-finish-load', () => {
        content.setAudioMuted(true)
        console.log(content.isAudioMuted())         // true
    })
}

app.whenReady().then(createWindow)
