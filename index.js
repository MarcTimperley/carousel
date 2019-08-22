const express = require('express')
const app = require('express')()
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'css')))
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'))
})
app.listen(4000)

exports.trueRtn = trueRtn
function trueRtn() {
  return true
}
