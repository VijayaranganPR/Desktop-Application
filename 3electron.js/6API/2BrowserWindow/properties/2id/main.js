/*
A Integer property representing the unique ID of the window. 
Each ID is unique among all BrowserWindow instances of the entire Electron application.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win1 = new BrowserWindow()
    const win2 = new BrowserWindow()
    console.log(win1.id)
    console.log(win2.id)
}

app.whenReady().then(createWindow)

/*
1
2
*/