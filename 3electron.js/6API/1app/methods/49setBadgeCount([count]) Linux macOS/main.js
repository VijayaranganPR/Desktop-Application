/*
The app.setBadgeCount(count) function in Electron JS sets the number displayed as a badge on the dock icon in macOS and Linux. The count parameter is a positive integer representing the number to display as the badge.


count Integer (optional) - If a value is provided, set the badge to the provided value otherwise, on macOS, display a plain white dot (e.g. unknown number of notifications). On Linux, if a value is not provided the badge will not display.
Returns boolean - Whether the call succeeded.

Sets the counter badge for current app. Setting the count to 0 will hide the badge.

On macOS, it shows on the dock icon. On Linux, it only works for Unity launcher.

Note: Unity launcher requires a .desktop file to work. For more information, please read the Unity integration documentation.
*/

const { app } = require('electron');

app.setBadgeCount(5);
