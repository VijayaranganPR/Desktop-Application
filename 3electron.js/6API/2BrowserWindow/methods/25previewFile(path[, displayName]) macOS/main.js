/*
path string - The absolute path to the file to preview with QuickLook. 
This is important as Quick Look uses the file name and file extension on the path to determine the content type of the file to open.

displayName string (optional) - The name of the file to display on the Quick Look modal view. 
This is purely visual and does not affect the content type of the file. Defaults to path.
Uses Quick Look to preview a file at a given path.


*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    // Show a file preview for the specified file path
    win.previewFile('/path/to/file.txt', 'My Text File')

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)