/*
fullPath string
Show the given file in a file manager. If possible, select the file.

*/

const {app,BrowserWindow, shell} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    shell.showItemInFolder('E:\\desktop\\Desktop Application\\3electron.js\\6API\\10shell\\2showItemInFolder(fullPath)')

}

app.whenReady().then(createWindow)
