/*
app.requestSingleInstanceLock() is a method provided by the electron framework for building cross-platform desktop applications using web technologies. 
It's used to ensure that only one instance of the application is running at a time.

When this method is called, it will try to acquire a lock on the application. 
If the lock is acquired, the method returns true, which indicates that this instance of the application is the only one running. 
If the lock cannot be acquired, because another instance of the application is already running, the method returns false.

The optional additionalData parameter is an array of strings that can be used to pass command line arguments or other data from the second instance of the application to the first instance. 
This is useful if you want to open a new file or perform some other action in the already running instance of the application, rather than starting a new instance.



additionalData Record<any, any> (optional) - A JSON object containing additional data to send to the first instance.
Returns boolean

The return value of this method indicates whether or not this instance of your application successfully obtained the lock. If it failed to obtain the lock, you can assume that another instance of your application is already running with the lock and exit immediately.

I.e. This method returns true if your process is the primary instance of your application and your app should continue loading. It returns false if your process should immediately quit as it has sent its parameters to another instance that has already acquired the lock.

On macOS, the system enforces single instance automatically when users try to open a second instance of your app in Finder, and the open-file and open-url events will be emitted for that. However when users start your app in command line, the system's single instance mechanism will be bypassed, and you have to use this method to ensure single instance.


*/

const { app } = require('electron')
let myWindow = null

const additionalData = { myKey: 'myValue' }
const gotTheLock = app.requestSingleInstanceLock(additionalData)

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory, additionalData) => {
    // Print out data received from the second instance.
    console.log(additionalData)

    // Someone tried to run a second instance, we should focus our window.
    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore()
      myWindow.focus()
    }
  })

  // Create myWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    myWindow = createWindow()
  })
}
