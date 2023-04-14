/*
Returns boolean - Whether the menu bar is visible.

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