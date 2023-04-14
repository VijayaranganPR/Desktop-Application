const img = document.getElementById("img")

async function prom(){
    p.hidden = true
    img.hidden = false
    returned = await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
  .then((url)=>{
        img.src = url.message
    });

}

window.addEventListener('click', prom)
