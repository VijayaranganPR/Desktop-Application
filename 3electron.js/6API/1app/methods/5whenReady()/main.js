/*
Returns Promise<void> - fulfilled when Electron is initialized. 
May be used as a convenient alternative to checking app.isReady() and subscribing to the ready event if the app is not ready yet.
*/

const {app} = require('electron')

app.whenReady()
.then((value) => {
    console.log('app is ready')
    app.quit()
})
/*
app is ready
*/