/*
Returns Object:

title string
url string
Returns an Object containing title and url keys representing the bookmark in the clipboard. The title and url values will be empty strings when the bookmark is unavailable. The title value will always be empty on Windows.

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

