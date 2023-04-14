/*
By default, Chromium disables 3D APIs (e.g. WebGL) until restart on a per domain basis if the GPU processes crashes too frequently. 
This function disables that behavior.

The function app.disableDomainBlockingFor3DAPIs() in Electron JS is used to disable the domain blocking feature for 3D APIs. 
By default, Electron blocks the usage of some domains in 3D APIs such as WebGL to prevent security vulnerabilities. 
This function disables that blocking, which allows 3D APIs to access all domains. However, this should be used with caution, 
as it can increase the risk of security vulnerabilities.

This method can only be called before app is ready.
*/

const { app } = require('electron');

// Disable domain blocking for 3D APIs
app.disableDomainBlockingFor3DAPIs();

// Your Electron app code here
