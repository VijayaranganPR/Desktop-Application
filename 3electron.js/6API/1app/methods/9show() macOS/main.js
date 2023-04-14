/*
Shows application windows after they were hidden. Does not automatically focus them.

The app.show() method in Electron is a method of the app module that is used to show the application's main window on macOS. 
This method is used to bring the application's main window from the background to the front of all other windows on the screen.
*/

const { app } = require('electron')

app.on('ready', () => {
  if (app.isHidden()) {
    app.show()
  }
})
