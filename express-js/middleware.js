const express = require('express')
const app = express()


app.use('/', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })


  app.get(`/`, (req, res)=>{
    console.log('get me.. :');
    res.send('get me.. :')
  })

  app.listen(3000, ()=>{
    console.log('listening.............')
  })