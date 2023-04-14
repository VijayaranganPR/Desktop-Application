/*
A string which is the user agent string Electron will use as a global fallback.

This is the user agent that will be used when no user agent is set at the webContents or session level. 
It is useful for ensuring that your entire app has the same user agent. 
Set to a custom value as early as possible in your app's initialization to ensure that your overridden value is used.
*/

const { app } = require('electron')

app.userAgentFallback = 'My custom user agent string'
console.log(app.userAgentFallback)              // My custom user agent string
app.quit()