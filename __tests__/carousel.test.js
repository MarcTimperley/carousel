const path = require ('path')
const carousel = require (path.join(__dirname,'../carousel.js'))
test ('true',()=>{
  console.log(carousel.trueRtn())
  expect(carousel.trueRtn()).toBe(true)
})
