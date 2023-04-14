/*
The app.getLocaleCountryCode method in Electron allows you to retrieve the country code of the locale of the operating system. 
The country code is a string that represents the geographical location of the user.

Returns string - User operating system's locale two-letter ISO 3166 country code. The value is taken from native OS APIs.

Note: When unable to detect locale country code, it returns empty string.
*/

const { app } = require('electron');

console.log(app.getLocaleCountryCode());
// Output: 'IN'
