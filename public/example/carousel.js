let canvas = {}
let canvasWidth = 0
let canvasHeight = 0
let images = []
let count = 0
const scale = 0.3

window.onload = function carousel() {

  canvas = document.getElementById('images')
  canvasWidth = canvas.offsetWidth
  canvasHeight = canvas.offsetHeight
  console.log(canvasWidth, canvasHeight)
  const sources = document.getElementById('sources')
  const sourceImages = [...sources.childNodes]
  for (const image of sourceImages) {
    if (image.nodeName === 'IMG') {
      console.log(image)
      console.log(`loaded image ${image.alt}`)
      positionThumb(image)
    }
  }
  console.log(`all done`)
}

function positionThumb(image) {
  let portrait = image.naturalHeight > image.naturalWidth ? true : false
  let imageSize = {
    width: Math.min(parseInt(Math.floor(canvasWidth * scale)), 280)+'px',
    height: 'auto'
  }
  if (portrait) {
    imageSize.width = 'auto'
    imageSize.height = Math.min(parseInt(Math.floor(canvasWidth * scale)), 280)+'px'
  }
  //let imageSize = `width: ${Math.min(parseInt(Math.floor(canvasWidth * scale)), 280)}px; height:auto;`
  //let containerSize = `width: ${Math.max(parseInt(Math.floor(canvasWidth * scale)), 180)}px;`
  //if (image.naturalHeight > image.naturalWidth) imageSize = `width:auto; height:px;`
  // if (image.naturalHeight > image.naturalWidth) containerSize = `width:auto; height:${Math.max(parseInt(Math.floor(canvasWidth * scale)), 180)}px;`
  const rotation = Math.floor(Math.random() * 50 - 25)
  const x = Math.floor(Math.random() * canvasWidth / 2)
  const y = Math.floor(Math.random() * canvasHeight / 2)
  // center better
  image.style = 'width:10px; height:10px; top:5px; left:5px; position:absolute;'
  images.push({
    [image.src]: {
      x: x,
      y: y,
      // size: imageSize,
      rotation: rotation,
      caption: image.alt
    }
  })
  console.log()
  let html = `<label for="checkbox${count}"><input type="checkbox" id="checkbox${count}" class="check">`
  html += `<div class="image-container" style="transform: rotate(${rotation}deg) scale(1); ">`
  html += `<img src="${image.src}" alt="${image.alt}" class="thumbnail" id=${count} style="width:${imageSize.width};height:${imageSize.height}">`
  html += `<p class="caption" style="max-width:200px;">${image.alt}</p>`
  html += `</div>`
  html += `</label>`
  canvas.innerHTML += html
  count++
}
