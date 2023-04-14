/*
offsetY Float
offsetX Float (optional)
Changes the attachment point for sheets on macOS. 
By default, sheets are attached just below the window frame, but you may want to display them beneath a HTML-rendered toolbar. 
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    const toolbarRect = document.getElementById('toolbar').getBoundingClientRect()
    win.setSheetOffset(toolbarRect.height)
}

app.whenReady().then(createWindow)
