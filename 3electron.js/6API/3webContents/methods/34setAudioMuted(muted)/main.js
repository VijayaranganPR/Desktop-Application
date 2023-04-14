/*
muted boolean
Mute the audio on the current web page.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.youtube.com/watch?v=X1HOCvfPmQg')
    const content = win.webContents

    content.on('did-finish-load', () => {
        content.setAudioMuted(true)
    })
}

app.whenReady().then(createWindow)
