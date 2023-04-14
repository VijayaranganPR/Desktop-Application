/*
Hides all application windows without minimizing them.

The app.hide() method in Electron is a method of the app module that is used to hide the application's main window on macOS.
This method is used to remove the application's main window from the screen and place it in the background.
*/

const { app, Menu, MenuItem, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadFile('index.html')

  const template = [
    {
      label: 'Application',
      submenu: [
        {
          label: 'Hide',
          accelerator: 'Command+H',
          click: () => {
            app.hide()
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})
