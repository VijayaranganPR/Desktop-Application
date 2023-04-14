/*
still bending


The win.setProgressBar(progress[, options]) method in ElectronJS is used to set the progress value of a taskbar or dock icon progress bar. This method is useful for indicating the progress of a long-running task, such as a file download.

The progress parameter is a number between 0 and 1, where 0 indicates no progress and 1 indicates complete progress.

The options parameter is an optional object that can be used to specify additional options for the progress bar. The options object can have the following properties:

mode - A string that specifies the mode of the progress bar. The default mode is "normal", which displays a solid color. Other modes include "error" (displays a red color) and "paused" (displays a yellow color).
title - A string that specifies the tooltip text that is displayed when the user hovers over the progress bar.



progress Double
options Object (optional)
mode string Windows - Mode for the progress bar. Can be none, normal, indeterminate, error or paused.
Sets progress value in progress bar. Valid range is [0, 1.0].

Remove progress bar when progress < 0; Change to indeterminate mode when progress > 1.

On Linux platform, only supports Unity desktop environment, you need to specify the *.desktop file name to desktopName field in package.json. By default, it will assume {app.name}.desktop.

On Windows, a mode can be passed. Accepted values are none, normal, indeterminate, error, and paused. If you call setProgressBar without a mode set (but with a value within the valid range), normal will be assumed.

*/


const {app,BrowserWindow, ipcMain} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    // load the index.html file
    mainWindow.loadFile('index.html')

    // handle download-started event
ipcMain.on('download-started', function (event, arg) {
    // simulate a file download that takes 5 seconds
    for (let i = 0; i <= 100; i += 10) {
      setTimeout(function () {
        mainWindow.setProgressBar(i / 100, { title: 'Downloading...' })
      }, i * 50)
    }
  })
  

    // when window is closed
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

// create the window when app is ready
app.on('ready', createWindow)

// quit app when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// create a window when app is activated and no windows are open
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})