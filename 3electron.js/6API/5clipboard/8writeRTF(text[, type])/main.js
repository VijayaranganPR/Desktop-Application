/*
text string
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes the text into the clipboard in RTF.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    clipboard.writeRTF('{\\rtf1\\ansi{\\fonttbl\\f0\\fswiss Helvetica;}\\f0\\pard\nThis is some {\\b bold} text.\\par\n}')

    const rtf = clipboard.readRTF()
    console.log(rtf)
}

app.whenReady().then(createWindow)
/*
{\rtf1\ansi{\fonttbl\f0\fswiss Helvetica;}\f0\pard
This is some {\b bold} text.\par
}
*/
