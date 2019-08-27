
let canvas = {}
let canvasWidth = 0
let canvasHeight = 0
let images = []
let count = 0
const scale = 0.4

window.onload = function carousel() {

  canvas = document.getElementById('images')
  canvasWidth = canvas.offsetWidth
  canvasHeight = canvas.offsetHeight
  console.log(canvasWidth, canvasHeight)
  const sources = document.getElementById('sources')
const sourceImages = [...sources.childNodes]
  for (const image of sourceImages) {
    if (image.nodeName === 'IMG') {
      console.log(`loaded image ${image.alt}`)
      positionThumb(image)
    }
  }
  console.log(`all done`)
}

function positionThumb(image) {
  let imageSize = `width: ${Math.max(parseInt(Math.floor(canvasWidth * scale)), 180)}px; height:auto;`
  if (image.naturalHeight > image.naturalWidth) imageSize = `width:auto; height:${Math.max(parseInt(Math.floor(canvasWidth * scale)), 180)}px;`
  // const maxH = Math.max(parseInt(Math.floor(canvasHeight * scale / document.images.length)), 100)

  const rotation = Math.floor(Math.random() * 50 - 25)
  const x = Math.floor(Math.random() * canvasWidth / 2)
  const y = Math.floor(Math.random() * canvasHeight / 2)
  // center better
  image.style = 'width:10px; height:10px; top:5px; left:5px; position:absolute;'
  // add link
  //  ctx.rotate(rotation * Math.PI / 180)
  // preserve ratio
  // ctx.fillStyle = '#ccc'
  // ctx.fillRect(x - 5, y - 5, maxW + 10, maxH + 10)
  images.push({
    [image.src]: {
      x: x,
      y: y,
      size: imageSize,
      rotation: rotation
    }
  })
  console.log(images)
  // ctx.drawImage(image, x, y, maxW, maxH)
  let html = `<label for="checkbox${count}"><input type="checkbox" id="checkbox${count}" class="check">`
  html += `<img src="${image.src}" alt="${image.src}" class="thumbnail" id=${count} style="left:${x}px; top:${y}px; transform: rotate(${rotation}deg) scale(1); ${imageSize}">`
  html += `</label>`
  canvas.innerHTML += html
  count++
}
