/*
visible boolean
Sets whether the menu bar should be visible. 
If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single Alt key.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setMenuBarVisibility(true)
    console.log(mainWindow.isMenuBarVisible());        // true
    setTimeout(() => {
        mainWindow.setMenuBarVisibility(false)
    console.log(mainWindow.isMenuBarVisible());        // false
}, 3000);
    
}



// create the window when app is ready
app.on('ready', createWindow)