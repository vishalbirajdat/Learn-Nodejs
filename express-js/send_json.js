const { json } = require("express");
const express = require(`express`);
const port = 5000;
const app = express();

app.get(`/`, (req, res)=>{
    const jsondata = {
        jsondata :`jsondata`
    };
    // res.json(jsondata);
    const jsonContent = JSON.stringify(jsondata);
    // res.end(jsonContent);

    res.send(jsonContent);

    console.log(res);
})



app.listen(port, ()=>{
    console.log(`listen.......`);
})