/*
Forcefully terminates the renderer process that is currently hosting this webContents. 
This will cause the render-process-gone event to be emitted with the reason=killed || reason=crashed. 
Please note that some webContents share renderer processes and therefore calling this method may also crash the host process for other webContents as well.

Calling reload() immediately after calling this method will force the reload to occur in a new process. 
This should be used when this process is unstable or unusable, for instance in order to recover from the unresponsive event.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    win.webContents.on('crashed', (event, killed) => {
        console.log(`WebContents has crashed (killed=${killed}): ${win.webContents.isCrashed()}`)       // WebContents has crashed (killed=false): true
    })
    
    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', () => {
        // Call forcefullyCrashRenderer method to intentionally crash the renderer process
        win.webContents.forcefullyCrashRenderer()
    })
}
app.whenReady().then(createWindow)