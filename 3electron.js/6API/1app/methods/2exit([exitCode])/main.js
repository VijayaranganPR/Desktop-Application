/*
exitCode Integer (optional)
Exits immediately with exitCode. exitCode defaults to 0.

All windows will be closed immediately without asking the user, and the before-quit and will-quit events will not be emitted.
*/

const { app } = require('electron')

app.on('ready', () => {
  // Your application code goes here

  // When you're ready to exit, call the `app.exit()` method
  app.exit(0)
})
