const jwt = require(`jsonwebtoken`);
const User = require("./schemas");
require(`dotenv`).config();


const auth = async(req, res, next)=>{
try {
    const token = req.cookies.jwt;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({_id:verify._id});
    if(user.email){
            req.user=user;
            req.token=token;
        next();
    }else{
        res.redirect(`/logout`);
    }
} catch (error) {
    res.redirect(`/error`)
}
}


module.exports = auth;