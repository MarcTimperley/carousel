const path = require ('path')
const index = require (path.join(__dirname,'../index.js'))
test ('true',()=>{
  console.log(index.trueRtn())
  expect(index.trueRtn()).toBe(true)
})
