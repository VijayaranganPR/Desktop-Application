/*
data Object
text string (optional)
html string (optional)
image NativeImage (optional)
rtf string (optional)
bookmark string (optional) - The title of the URL at text.
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes data to the clipboard.

*/
const {app,BrowserWindow,clipboard} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')


    clipboard.write({
        text: 'test',
        html: '<b>Hi</b>',
        rtf: '{\\rtf1\\utf8 text}',
        bookmark: 'a title'
    })

    console.log(clipboard.readText())
    // 'test'

    console.log(clipboard.readHTML())
    // <b>Hi</b>

    console.log(clipboard.readRTF())
    // '{\\rtf1\\utf8 text}'

    console.log(clipboard.readBookmark())
    // { title: '', url: 'test' }

}

app.whenReady().then(createWindow)
