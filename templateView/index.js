const express = require(`express`);
const path = require(`path`);
const app = express();
const hbs = require(`hbs`);
const temp = path.join(__dirname, `/templates`);
const partials = path.join(__dirname, `/partials`)
app.set(`view engine`, `hbs`);
app.set(`views`, temp);


hbs.registerPartials(partials);

app.get(`/`, (req, res)=>{
    res.render(`index`, {
        prop:`prop name`
    });
})



app.listen(8000, ()=>{
    console.log(`welcom....`)
})