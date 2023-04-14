/*
Returns boolean - whether Secure Keyboard Entry is enabled.

By default this API will return false.
*/
const { app } = require('electron');

// Check if secure keyboard entry is enabled
if (app.isSecureKeyboardEntryEnabled()) {
  console.log('Secure keyboard entry is enabled');
} else {
  console.log('Secure keyboard entry is not enabled');
}
