const express = require(`express`);
const path = require(`path`);
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname , `/public`)));


app.get(`/`, (req, res)=>{
    res.send(`Welcome`);

})

app.listen(port, ()=>{
    console.log(`listening..... 8000 port`)
})