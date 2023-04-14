/*
policy string - Can be animate, animateOnce or noAnimation.
Sets the image animation policy for this webContents. The policy only affects new images, existing images that are currently being animated are unaffected. This is a known limitation in Chromium, you can force image animation to be recalculated with img.src = img.src which will result in no network traffic but will update the animation policy.

*/


const { app, BrowserWindow} = require('electron');


app.on('ready', () => {
  const win = new BrowserWindow()

  win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        win.webContents.setImageAnimationPolicy('noAnimation')
    })

});
