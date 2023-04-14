/*
path string - path to the item to be moved to the trash.
Returns Promise<void> - Resolves when the operation has been completed. Rejects if there was an error while deleting the requested item.

This moves a path to the OS-specific trash location (Trash on macOS, Recycle Bin on Windows, and a desktop-environment-specific location on Linux).


*/

const {app,BrowserWindow, shell} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    shell.trashItem('E:\\desktop\\Desktop Application\\3electron.js\\6API\\10shell\\4trashItem(path)\\move to trash.txt')         // moved to trash

}

app.whenReady().then(createWindow)
