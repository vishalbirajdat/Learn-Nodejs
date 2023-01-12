require(`dotenv`).config();
const { default: mongoose } = require("mongoose");
const validator = require(`validator`);
const hashme = require("./hash");
const jwt = require(`jsonwebtoken`);
const secretCode = `I am Vishal`;
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        },
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        trim:true
    },


    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],

    createdDate:{
        type:Date,
        default:Date.now
    }
})


userSchema.methods.genrateAuthToken = async function(){
    try {
    console.log(`get auth : `, this.password);

        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        console.log(token);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        console.log(`after save : ` , this.password);
        return token;
    } catch (error) {
        console.log(`the error in jwt ${error}`);
        throw new Error(`the error in jwt ${error}`);
    }
}

userSchema.pre(`save`, async function(next){
    console.log(`pre save : `, this.password);
    if (this.isModified(`password`)) {
        console.log(`pre save : `, this.password);
        this.password = await hashme(this.password);
        console.log(`pre save : `, this.password);
    }
    next();
})
const User = new mongoose.model(`User`, userSchema);


module.exports = User;