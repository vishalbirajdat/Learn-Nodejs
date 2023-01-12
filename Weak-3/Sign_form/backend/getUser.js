const jwt = require(`jsonwebtoken`);
const User = require("./schemas");
require(`dotenv`).config();


const getUser = async(req, res, next)=>{
try {
    const token = req.cookies.jwt;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({_id:verify._id});
    if(user.email){
        req.user = true;
        next();
    }else{
        req.user = false;
        next();
    }
} catch (error) {
    req.user = false;
    next();
}
}


module.exports = getUser;