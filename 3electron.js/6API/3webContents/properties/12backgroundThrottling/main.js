/*
A boolean property that determines whether or not this WebContents will throttle animations and timers when the page becomes backgrounded. 
This also affects the Page Visibility API.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.backgroundThrottling)       // true     
    })
}

app.whenReady().then(createWindow)
