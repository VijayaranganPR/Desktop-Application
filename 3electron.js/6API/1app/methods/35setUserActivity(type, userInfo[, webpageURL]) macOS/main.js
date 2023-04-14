/*
The app.setUserActivity method in Electron for macOS allows you to set the user activity for your application.

The type parameter is a string that represents the type of activity you want to set. 
The userInfo parameter is an object that contains additional information about the activity, such as the title, description, and relevant URLs. 
The webpageURL parameter is an optional string that represents the URL of the web page that the activity is associated with.
*/

const { app } = require('electron');

app.setUserActivity('com.example.activityType', {
  title: 'Example Activity',
  type: 'example-activity',
  description: 'An example activity',
  webpageURL: 'https://example.com'
});
