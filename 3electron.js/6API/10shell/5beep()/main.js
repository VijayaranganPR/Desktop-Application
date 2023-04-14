/*
Play the beep sound.

*/

const {app,BrowserWindow, shell} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    shell.beep()
}

app.whenReady().then(createWindow)
