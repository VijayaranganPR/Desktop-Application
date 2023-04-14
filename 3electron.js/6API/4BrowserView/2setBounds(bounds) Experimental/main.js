/*
bounds Rectangle
Resizes and moves the view to the supplied bounds relative to the window.

s*/
const {app, BrowserWindow, BrowserView} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const view = new BrowserView()

    win.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
    view.webContents.loadURL('https://www.google.com/')
}

app.whenReady().then(createWindow)
