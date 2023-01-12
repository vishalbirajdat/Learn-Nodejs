const express = require(`express`);
const User = require("./schemas");
const router = express.Router();
const compareHash = require("./compareHash");


router.post(`/register`, async (req, res)=>{
    try {
     const user = new User({
         email:req.body.email,
         password:req.body.pass
     })
 
 
     const token = await user.genrateAuthToken();
     // const result = await user.save();
 
     res.cookie(`jwt`, token, {
         httpOnly:true,
         expires:new Date(Date.now() + 300000)
     });
 
     res.redirect(`/dashboard`);
    } catch (error) {
     console.log(error)
     res.redirect(`/register`)
    }
 });
 
 
 
 router.post(`/login`, async (req, res)=>{
     console.log(req.cookies.jwt);
     try {
         const email  = req.body.email;
         const password = req.body.pass;
 
 
         
         const result = await User.findOne({email:email});
         const pass =await compareHash(password, result.password);
         if (pass != null) {
             console.log(pass);
             const token = await result.genrateAuthToken();
             
             res.cookie(`jwt`, token, {
                 httpOnly:true,
                 expires:new Date(Date.now() + 300000)
             });
 
             res.redirect(`/dashboard`);
 
         }else{
             res.status(401).send(`invalid error`)
         }
     } catch (error) {
      console.log(error)
      res.redirect(`/login`)
     }
  });
  


module.exports = router;