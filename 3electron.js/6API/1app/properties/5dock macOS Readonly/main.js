/*
A Dock | undefined object that allows you to perform actions on your app icon in the user's dock on macOS.
*/
const { app } = require('electron')

if (process.platform === 'darwin') {
  app.dock.setBadge('10')
}
