/*
title string - Unused on Windows
url string
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes the title (macOS only) and url into the clipboard as a bookmark.

Note: Most apps on Windows don't support pasting bookmarks into them so you can use clipboard.write to write both a bookmark and fallback text to the clipboard.
*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    clipboard.writeBookmark('Electron Docs', 'https://www.electronjs.org/docs')
    const bookmark = clipboard.readBookmark()
    console.log(bookmark);                      // { title: '', url: 'https://www.electronjs.org/docs' }
}

app.whenReady().then(createWindow)

