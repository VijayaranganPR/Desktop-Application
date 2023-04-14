/*
title string
Changes the title of native window to title.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setTitle('new Title')
    console.log(win1.getTitle());            // new Title
}

app.whenReady().then(createWindow)
