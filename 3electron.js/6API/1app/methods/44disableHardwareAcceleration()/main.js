/*
Disables hardware acceleration for current app.

This method can only be called before app is ready.
*/
const {app} = require('electron');
app.disableHardwareAcceleration()
app.quit()