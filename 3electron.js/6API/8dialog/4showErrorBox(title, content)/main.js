/*
title string - The title to display in the error box.
content string - The text content to display in the error box.
Displays a modal dialog that shows an error message.

This API can be called safely before the ready event the app module emits, it is usually used to report errors in early stage of startup. If called before the app readyevent on Linux, the message will be emitted to stderr, and no GUI dialog will appear.

*/

const {app,BrowserWindow,dialog} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    dialog.showErrorBox('title', 'content string')
}

app.whenReady().then(createWindow)
