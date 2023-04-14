/*
data Object
text string (optional)
html string (optional)
image NativeImage (optional)
rtf string (optional)
bookmark string (optional) - The title of the URL at text.
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes data to the clipboard.
*/

const {app,BrowserWindow, contentTracing} = require('electron')

const createWindow = async() => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const categories = await contentTracing.getCategories()
    console.log(categories)
}

app.whenReady().then(createWindow)

/*
[
  'AccountFetcherService',
  'Blob',
  'CacheStorage',
  'Calculators',
  'CameraStream',
  'DXVA_Decoding',
  'FileSystem',
  'GAMEPAD',
  'IndexedDB',
  'Java',
  'PlatformMalloc',
  'RLZ',
  'ServiceWorker',
  'SiteEngagement',
  'ValueStoreFrontend::Backend',
  'WebCore',
  'accessibility',
  'android_webview',
  'aogh',
  'audio',
  'base',
  'benchmark',
  'blink',
  'blink.animations',
  'blink.bindings',
  'blink.console',
  'blink.net',
  'blink.resource',
  'blink.user_timing',
  'blink.worker',
  'blink_style',
  'browser',
  'browsing_data',
  'camera',
  'cast.mdns',
  'cast.mdns.socket',
  'cast.stream',
  'cast_app',
  'cast_perf_test',
  'catan_investigation',
  'cc',
  'cc.debug',
  'cdp.perf',
  'chromeos',
  'cma',
  'compositor',
  'content',
  'content_capture',
  'cppgc',
  'delegated_ink_trails',
  'device',
  'devtools',
  'devtools.contrast',
  'devtools.timeline',
  'disabled-by-default-SyncFileSystem',
  'disabled-by-default-android_view_hierarchy',
  'disabled-by-default-animation-worklet',
  'disabled-by-default-audio',
  'disabled-by-default-audio-worklet',
  'disabled-by-default-base',
  'disabled-by-default-blink.debug',
  'disabled-by-default-blink.debug.display_lock',
  'disabled-by-default-blink.debug.layout',
  'disabled-by-default-blink.debug.layout.trees',
  'disabled-by-default-blink.feature_usage',
  'disabled-by-default-blink.image_decoding',
  'disabled-by-default-blink.invalidation',
  'disabled-by-default-cc',
  'disabled-by-default-cc.debug',
  'disabled-by-default-cc.debug.cdp-perf',
  'disabled-by-default-cc.debug.display_items',
  'disabled-by-default-cc.debug.picture',
  'disabled-by-default-cc.debug.scheduler',
  'disabled-by-default-cc.debug.scheduler.frames',
  'disabled-by-default-cc.debug.scheduler.now',
  'disabled-by-default-content.verbose',
  'disabled-by-default-cppgc',
  'disabled-by-default-cpu_profiler',
  'disabled-by-default-cpu_profiler.debug',
  'disabled-by-default-devtools.screenshot',
  'disabled-by-default-devtools.timeline',
  'disabled-by-default-devtools.timeline.frame',
  'disabled-by-default-devtools.timeline.inputs',
  'disabled-by-default-devtools.timeline.invalidationTracking',
  'disabled-by-default-devtools.timeline.layers',
  'disabled-by-default-devtools.timeline.picture',
  'disabled-by-default-devtools.timeline.stack',
  'disabled-by-default-file',
  'disabled-by-default-fonts',
  'disabled-by-default-gpu.dawn',
  'disabled-by-default-gpu.debug',
  'disabled-by-default-gpu.decoder',
  'disabled-by-default-gpu.device',
  'disabled-by-default-gpu.service',
  'disabled-by-default-gpu.vulkan.vma',
  'disabled-by-default-gpu_cmd_queue',
  'disabled-by-default-histogram_samples',
  'disabled-by-default-identifiability',
  'disabled-by-default-identifiability.high_entropy_api',
  'disabled-by-default-java-heap-profiler',
  ... 151 more items
]
*/