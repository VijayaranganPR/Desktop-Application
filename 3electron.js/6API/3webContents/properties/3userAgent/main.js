/*
A string property that determines the user agent for this web page.
*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.youtube.com/watch?v=qN3wfuPYTI4')
    console.log(win.webContents.userAgent)         // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) hello-world/1.0.0 Chrome/110.0.5481.77 Electron/23.0.0 Safari/537.36
}

app.whenReady().then(createWindow)
