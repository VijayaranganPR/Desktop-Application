/*
Returns boolean - Whether the window is in Windows 10 tablet mode.

Since Windows 10 users can use their PC as tablet, 
under this mode apps can choose to optimize their UI for tablets, such as enlarging the titlebar and hiding titlebar buttons.

This API returns whether the window is in tablet mode, and the resize event can be be used to listen to changes to tablet mode.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    
    console.log(win1.isTabletMode())                    // false
}

app.whenReady().then(createWindow)
