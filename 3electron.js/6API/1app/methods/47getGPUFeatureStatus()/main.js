/*
Returns GPUFeatureStatus - The Graphics Feature Status from chrome://gpu/.

Note: This information is only usable after the gpu-info-update event is emitted.
*/
const {app} = require('electron');
console.log(app.getGPUFeatureStatus());
app.quit()

/*
{
  '2d_canvas': 'disabled_software',
  canvas_oop_rasterization: 'disabled_off',
  direct_rendering_display_compositor: 'disabled_off_ok',
  gpu_compositing: 'disabled_software',
  multiple_raster_threads: 'enabled_on',
  opengl: 'disabled_off',
  rasterization: 'disabled_software',
  raw_draw: 'disabled_off_ok',
  video_decode: 'disabled_software',
  video_encode: 'disabled_software',
  vulkan: 'disabled_off',
  webgl: 'disabled_off',
  webgl2: 'disabled_off',
  webgpu: 'disabled_off'
}
*/