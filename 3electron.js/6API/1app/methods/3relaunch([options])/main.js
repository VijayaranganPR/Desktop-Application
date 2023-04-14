/*
options Object (optional)
    args string[] (optional)
    execPath string (optional)

Relaunches the app when current instance exits.

By default, the new instance will use the same working directory and command line arguments with current instance. 
When args is specified, the args will be passed as command line arguments instead. When execPath is specified, the execPath will be executed for relaunch instead of current app.

Note that this method does not quit the app when executed, you have to call app.quit or app.exit after calling app.relaunch to make the app restart.

When app.relaunch is called for multiple times, multiple instances will be started after current instance exited.

An example of restarting current instance immediately and adding a new command line argument to the new instance:
*/

const { app } = require('electron')

app.on('ready', () => {
  // Your application code goes here

  // When you want to relaunch the application, call the `app.relaunch()` method
  app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) })
  app.exit(0)
})
