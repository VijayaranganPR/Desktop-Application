/*
The destination read-only property of the Request interface returns a string describing the type of content being requested.

The string must be one of the audio, audioworklet, document, embed, font, frame, iframe, image, manifest, object, paintworklet, report, script, sharedworker, style, track, video, worker or xslt strings, or the empty string, which is the default value.

The destination is used by the user agent to, for example, help determine which set of rules to follow for CORS purposes, or how to navigate any complicated code paths that affect how specific types of request get handled.

These destinations vary substantially in how they operate. Some are data receptacles, where the received data is stored for processing later. Others are script-based, in which case the received data is delivered to a script by calling it and passing the data along. 
Script-based destinations include <script> elements, as well as any of the Worklet-based destinations (including AudioWorklet and PaintWorklet), and the Worker-based destinations, including ServiceWorker and SharedWorker.
*/

const request = new Request('/ExampleURL/Won"t/work',{
    method: 'post',
    body: 'Hello World'
})
console.log(request.destination)       // ''     (default)
