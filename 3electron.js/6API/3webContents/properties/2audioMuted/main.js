/*
A boolean property that determines whether this page is muted.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.youtube.com/watch?v=qN3wfuPYTI4')
    win.webContents.setAudioMuted(true)
    console.log(win.webContents.audioMuted)         // true
}

app.whenReady().then(createWindow)
