const { remote } = require('electron');
const { startDrag, cancelDrag } = remote.getCurrentWebContents();

const image = document.getElementById('drag-image');
image.addEventListener('mousedown', (event) => {
  event.preventDefault();

  const dragData = {
    type: 'image',
    url: image.src
  };

  startDrag(dragData);
});
