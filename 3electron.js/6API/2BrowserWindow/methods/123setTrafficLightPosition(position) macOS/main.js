/*
position Point
Set a custom position for the traffic light buttons in frameless window.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.setTrafficLightPosition('give position')
}

// create the window when app is ready
app.on('ready', createWindow)

