let canvas = {}
let canvasWidth = 0
let canvasHeight = 0
let images = []
let count = 0
let imageCount = 0
let columns = 0
let rows = 0
const scale = 0.3
let picSize = 0

window.onload=carousel()

function carousel() {

  canvas = document.getElementById('images')
  canvasWidth = canvas.offsetWidth
  canvasHeight = canvas.offsetHeight
  console.log(canvasWidth, canvasHeight)
  const sources = document.getElementById('sources')
  const sourceImages = [...sources.childNodes]
  for (const image of sourceImages) {
    if (image.nodeName === 'IMG') {
      imageCount++
    }
  }
  picSize = canvasWidth * canvasHeight / imageCount / 700
  for (const image of sourceImages) {
    if (image.nodeName === 'IMG') {
      console.log(image.src)
      positionThumb(image)
    }
  }
  console.log(`all done`)
}

function positionThumb(image) {
  let portrait = image.naturalHeight > image.naturalWidth ? true : false
  let imageSize = {
    width: Math.min(parseInt(Math.floor(canvasWidth * scale)), picSize) + 'px',
    height: 'auto'
  }
  if (portrait) {
    imageSize.width = 'auto'
    imageSize.height = Math.min(parseInt(Math.floor(canvasWidth * scale)), picSize) + 'px'
  }
  const rotation = Math.floor(Math.random() * 70 - 35)

let x = Math.floor(Math.max((Math.random() * 50 - 25) + (picSize * columns - 75), 20))
  if (x + picSize * 2 - canvasWidth > 0) {
    console.log('resetting row:' + (x + picSize * 2) + ' > ' + canvasWidth)
    rows++
    columns = 0
  } else {
    columns++
  }
   x = Math.floor(Math.max((Math.random() * 50 - 25) + (picSize * columns - 75), 20))
  let y = Math.floor(Math.max(Math.random() * 50 - 25 + rows * (picSize - 70), 20))
  image.style = 'width:10px; height:10px; top:5px; left:5px; position:absolute;'
  images.push({
    [image.src]: {
      x: x,
      y: y,
      rotation: rotation,
      caption: image.alt
    }
  })
  console.log()
  console.log(x, y)
  let html = `<label for="checkbox${count}"><input type="checkbox" id="checkbox${count}" style=" left:${x}; top:${y};" class="check">`
  html += `<div class="image-container" style="transform: rotate(${rotation}deg) scale(1); left:${x}px; top:${y}px;">`
  html += `<img src="${image.src}" alt="${image.alt}" class="thumbnail" id=${count} style="width:${imageSize.width};height:${imageSize.height};">`
  html += `<p class="caption" style="width:${picSize};">${image.alt}</p>`
  html += `</div>`
  html += `</label>`
  canvas.innerHTML += html
  count++
}
