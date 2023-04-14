/*
enabled boolean - Enable or disable accessibility tree rendering
Manually enables Chrome's accessibility support, allowing to expose accessibility switch to users in application settings. See Chromium's accessibility docs for more details. Disabled by default.

This API must be called after the ready event is emitted.

Note: Rendering accessibility tree can significantly affect the performance of your app. It should not be enabled by default.
*/

const {app}  = require('electron')

app.on('ready', () => {
    app.setAccessibilitySupportEnabled(true)

console.log(app.isAccessibilitySupportEnabled());           // true

app.quit()
})