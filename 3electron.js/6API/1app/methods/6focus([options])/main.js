/*
The app.focus() method in Electron is a method of the app module that brings the application to the foreground. 
This method is used to bring the application's main window to the front of all other windows on the screen, making it the active window.


options Object (optional)
steal boolean macOS - Make the receiver the active app even if another app is currently active.
On Linux, focuses on the first visible window. 
On macOS, makes the application the active app. 
On Windows, focuses on the application's first window.

You should seek to use the steal option as sparingly as possible.
*/

const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('focus', () => {
    console.log('Main window has been focused')
  })
})

app.on('activate', () => {
  if (mainWindow === null) {
    return
  }

  app.focus({ previous: false })
})
