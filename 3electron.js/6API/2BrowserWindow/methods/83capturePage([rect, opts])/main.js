/*
rect Rectangle (optional) - The bounds to capture
opts Object (optional)
stayHidden boolean (optional) - Keep the page hidden instead of visible. Default is false.
stayAwake boolean (optional) - Keep the system awake instead of allowing it to sleep. Default is false.
Returns Promise<NativeImage> - Resolves with a NativeImage

Captures a snapshot of the page within rect. Omitting rect will capture the whole visible page. If the page is not visible, rect may be empty. The page is considered visible when its browser window is hidden and the capturer count is non-zero. If you would like the page to stay hidden, you should ensure that stayHidden is set to true.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')

    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', async () => {
        // Capture a screenshot of the entire window
        const image = await win.capturePage()
        win.webContents.send('fromMain', image)
    })
}

app.whenReady().then(createWindow)