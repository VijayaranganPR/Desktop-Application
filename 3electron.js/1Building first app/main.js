/*
app, which controls your application's event lifecycle.
BrowserWindow, which creates and manages app windows.
*/
const {app, BrowserWindow} = require('electron')

// The createWindow() function loads your web page into a new BrowserWindow instance:
createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('./index.html')
}

// In Electron, BrowserWindows can only be created after the app module's ready event is fired. 
// You can wait for this event by using the app.whenReady() API and calling createWindow() once its promise is fulfilled.
app.on('ready',() => {
    createWindow()


    // the below code is for mac

    // macOS apps generally continue running even without any windows open. 
    // Activating the app when no windows are available should open a new one.

    // Because windows cannot be created before the ready event, you should only listen for activate events after your app is initialized. 
    // Do this by only listening for activate events inside your existing whenReady() callback
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0)
        createWindow();
    })
})



app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    app.quit()
})
