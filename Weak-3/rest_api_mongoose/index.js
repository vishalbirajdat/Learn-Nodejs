const express = require("express");
const app = express();
const port = 8000;

const connect = require(`./src/connect`);
const router = require("./router");

connect();
app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})