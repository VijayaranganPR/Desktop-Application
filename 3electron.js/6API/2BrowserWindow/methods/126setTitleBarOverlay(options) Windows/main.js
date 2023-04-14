/*
still pending

options Object
color String (optional) Windows - The CSS color of the Window Controls Overlay when enabled.
symbolColor String (optional) Windows - The CSS color of the symbols on the Window Controls Overlay when enabled.
height Integer (optional) Windows - The height of the title bar and Window Controls Overlay in pixels.
*/


const { app, BrowserWindow, Menu } = require('electron')

// Create a new window when the app is ready
app.whenReady().then(() => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Create a custom menu for the window
  const template = [
    {
      label: 'File',
      submenu: [
        { role: 'quit' }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)

  // Set the title bar options
  win.setTitleBarOverlay({
    visibleOnFullScreen: true,
    menu: menu,
    icon: 'path/to/icon.png',
    title: 'My Window',
    overlay: true
  })

  // Load a website into the window
  win.loadURL('https://www.google.com')
})
