/*
An Integer property that returns the badge count for current app. Setting the count to 0 will hide the badge.

On macOS, setting this with any nonzero integer shows on the dock icon. On Linux, this property only works for Unity launcher.

Note: Unity launcher requires a .desktop file to work. For more information, please read the Unity integration documentation.

Note: On macOS, you need to ensure that your application has the permission to display notifications for this property to take effect.
*/

const { app } = require('electron')

app.dock.setBadgeCount(10)
