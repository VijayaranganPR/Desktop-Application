const {
    ipcRenderer
} = require("electron");

// Display the captured image in an <img> element
ipcRenderer.on('fromMain', (e, image) => {
    const img = document.createElement('img')
    img.src = image.toDataURL()
    document.body.appendChild(img)
})