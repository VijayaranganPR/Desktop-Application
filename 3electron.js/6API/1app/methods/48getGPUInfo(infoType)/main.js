/*
infoType string - Can be basic or complete.
Returns Promise<unknown>

For infoType equal to complete: Promise is fulfilled with Object containing all the GPU Information as in chromium's GPUInfo object. This includes the version and driver information that's shown on chrome://gpu page.

For infoType equal to basic: Promise is fulfilled with Object containing fewer attributes than when requested with complete. Here's an example of basic response:


*/
const {app} = require('electron');
console.log(app.getGPUInfo('basic'));
app.quit()

/*
Promise {
  {
    auxAttributes: {
      amdSwitchable: false,
      canSupportThreadedTextureMailbox: false,
      dx12FeatureLevel: 'Not supported',
      glResetNotificationStrategy: 0,
      inProcessGpu: true,
      initializationTime: 0,
      isAsan: false,
      jpegDecodeAcceleratorSupported: false,
      optimus: false,
      overlayInfo: [Object],
      passthroughCmdDecoder: false,
      sandboxed: false,
      softwareRendering: false,
      subpixelFontRendering: true,
      supportsD3dSharedImages: false,
      supportsDx12: false,
      supportsVulkan: false,
      targetCpuBits: 64,
      visibilityCallbackCallCount: 0,
      vulkanVersion: 'Not supported'
    },
    gpuDevice: [ [Object], [Object], [Object] ]
  }
}
*/