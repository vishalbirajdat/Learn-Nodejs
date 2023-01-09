const express = require(`express`);
const fetchData = require("./data");
const app = express();


// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get(`/`, async (req, res)=>{
       const data = await fetchData(req.body.name);
       res.send(data); 
})

app.listen(8000, ()=>{
    console.log(`Welcome listening.............`)
})