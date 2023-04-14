/*
A boolean property that determines whether the window is excluded from the application’s Windows menu. false by default.

*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    const template = [{
        role: 'windowmenu'
    }]

    win.excludedFromShownWindowsMenu = true

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    console.log(win.excludedFromShownWindowsMenu); // true      (menu will be changed)
}

app.whenReady().then(createWindow)