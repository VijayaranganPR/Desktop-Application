/*
url string
Initiates a download of the resource at url without navigating. The will-download event of session will be triggered.
*/


const { app, webContents, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.webContents.loadFile('index.html')
    win.webContents.downloadURL('https://www.google.com/')
}

app.whenReady().then(createWindow)