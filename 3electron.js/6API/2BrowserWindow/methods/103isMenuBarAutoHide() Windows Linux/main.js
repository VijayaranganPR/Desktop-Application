/*
Returns boolean - Whether menu bar automatically hides itself.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setAutoHideMenuBar(true)
    console.log(mainWindow.isMenuBarAutoHide());        // true
    setTimeout(() => {
        mainWindow.setAutoHideMenuBar(false)
    console.log(mainWindow.isMenuBarAutoHide());        // false
}, 3000);
    
}



// create the window when app is ready
app.on('ready', createWindow)