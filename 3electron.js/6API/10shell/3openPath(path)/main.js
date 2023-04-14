/*
path string
Returns Promise<string> - Resolves with a string containing the error message corresponding to the failure if a failure occurred, otherwise "".

Open the given file in the desktop's default manner.

*/

const {app,BrowserWindow, shell} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    shell.openPath('E:\\desktop\\Desktop Application\\3electron.js\\6API\\10shell\\2showItemInFolder(fullPath)')

}

app.whenReady().then(createWindow)
