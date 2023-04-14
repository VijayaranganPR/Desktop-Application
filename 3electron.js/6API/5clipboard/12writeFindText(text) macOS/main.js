/*
text string
Writes the text into the find pasteboard (the pasteboard that holds information about the current state of the active application’s find panel) as plain text. 
This method uses synchronous IPC when called from the renderer process.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    clipboard.writeFindText('example search text')

    const findText = clipboard.readFindText()
    console.log(findText)
}

app.whenReady().then(createWindow)

