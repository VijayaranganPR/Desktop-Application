/*
Returns boolean - true if Chrome's accessibility support is enabled, false otherwise. 
This API will return true if the use of assistive technologies, such as screen readers, has been detected. 
See https://www.chromium.org/developers/design-documents/accessibility for more details.
*/

const {app}  = require('electron')

console.log(app.isAccessibilitySupportEnabled());           // false

app.quit()