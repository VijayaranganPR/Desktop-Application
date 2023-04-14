const { app } = require('electron')

app.on('ready', () => {
  if (app.isHidden()) {
    console.log('Application is hidden')
  } else {
    console.log('Application is visible')
  }
})
