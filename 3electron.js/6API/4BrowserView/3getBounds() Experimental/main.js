/*
Returns Rectangle

The bounds of this BrowserView instance as Object.

s*/
const {app, BrowserWindow, BrowserView} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const view = new BrowserView()

    win.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
    view.webContents.loadURL('https://www.google.com/')

    console.log(view.getBounds());          // { x: 0, y: 0, width: 300, height: 300 }
}

app.whenReady().then(createWindow)
