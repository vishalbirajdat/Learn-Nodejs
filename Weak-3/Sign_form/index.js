const express = require(`express`);
const router = require("./backend/router");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.static("images"));
const cookieParser = require(`cookie-parser`);
const path = require(`path`);
const hbs = require(`hbs`);
const { urlencoded } = require("express");
const connect = require("./backend/connect");
const auth = require("./backend/auth");
const userExist = require("./backend/userExist");
const getUser = require("./backend/getUser");
const temp = path.join(__dirname, `/templates`);
const partials = path.join(__dirname, `/partials`)
app.set(`view engine`, `hbs`);
app.set(`views`, temp)
app.use(urlencoded({extended:false}));
app.use(cookieParser());
app.use(router);

hbs.registerPartials(partials);
connect();

app.get(`/`, getUser, (req, res)=>{
        res.render(`index`, {
            props:req.user ? true : false
        });
    
});

app.get(`/error`, (req, res)=>{
    res.render(`404page`)
})


app.get(`/login`,userExist,  (req, res)=>{
    res.render(`login`);
});


app.get(`/register`,userExist,  (req, res)=>{
    res.render(`register`);
});

app.get(`/dashboard`,auth, (req, res)=>{
    const user = req.user;
    const token = req.token;
    res.render(`dashboard`, {
        user:user,
        token:token
    });
});


app.get(`/logout`,auth, (req, res)=>{
    res.clearCookie(`jwt`);
    res.redirect(`/login`);
});




app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})