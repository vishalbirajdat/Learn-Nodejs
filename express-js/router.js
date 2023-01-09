const express = require('express')
const app = express();
const port = 5000;


// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/post', (req, res) => {
  res.send('POST request to the homepage')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.listen(port, ()=>{
    console.log("Listening.......");
})