const div = document.getElementById('div')
div.innerHTML = `
Below are calculated by using window.getComputedStyle
<br>
<br>
top: ${window.getComputedStyle(div).top};
<br>
left: ${window.getComputedStyle(div).left};
<br>
height: ${window.getComputedStyle(div).height};
<br>
width: ${window.getComputedStyle(div).width};
<br>
border: ${window.getComputedStyle(div).border};
<br>
padding: ${window.getComputedStyle(div).padding};
<br>
position: ${window.getComputedStyle(div).position};`
