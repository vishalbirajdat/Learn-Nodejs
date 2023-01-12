require(`dotenv`).config();
const mongoose = require(`mongoose`);
mongoose.set('strictQuery', false);

 const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MongoDB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>console.log(`connected to databse`))
        .catch((err)=>console.log(err));
    } catch (error) {
        console.log(error);
    }
 }

module.exports = connect;
