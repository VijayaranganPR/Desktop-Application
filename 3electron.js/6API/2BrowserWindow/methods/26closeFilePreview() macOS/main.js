/*
Closes the currently open Quick Look panel.

*/

const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    // Show a file preview for the specified file path
    win.previewFile('/path/to/file.txt', 'My Text File')

    // Close the file preview window after 5 seconds
    setTimeout(() => {
        win.closeFilePreview()
    }, 5000)
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)