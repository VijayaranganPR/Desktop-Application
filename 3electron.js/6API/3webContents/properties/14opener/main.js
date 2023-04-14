/*
A WebFrameMain property that represents the frame that opened this WebContents, either with open(), or by navigating a link with a target attribute.

s*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.opener)             // null       
    })
}

app.whenReady().then(createWindow)

