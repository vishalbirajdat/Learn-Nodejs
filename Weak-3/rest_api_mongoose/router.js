

const express = require(`express`);
const router = express.Router();
const MensRanking = require(`./src/schemas`);


router.get(`/`, (req, res)=>{
    res.send(`hello to get index`);
})


router.post(`/add`, async (req,res)=>{
        try {
            const mensRanking = new MensRanking(req.body);
            const result = await mensRanking.save();
            res.status(201).send(result);
        } catch (error) {
            res.status(400).send(error)
        }
})


router.get(`/get/:id`, async (req,res)=>{
    try {
        const id = req.params.id;
        const result = await MensRanking.find({_id:id});
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router;