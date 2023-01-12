const jwt = require(`jsonwebtoken`);
const User = require("./schemas");
require(`dotenv`).config();


const userExist = async(req, res, next)=>{
try {
    const token = req.cookies.jwt;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({_id:verify._id});
    if(user.email){
        res.redirect(`/dashboard`);
    }else{
        next();
    }
} catch (error) {
    next();
}
}


module.exports = userExist;