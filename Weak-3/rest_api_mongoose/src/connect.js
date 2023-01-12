const mongoose = require(`mongoose`);
mongoose.set('strictQuery', false);
const Url = `mongodb://127.0.0.1:27017/olyDB`;
 const connect = async ()=>{
    try {
        await mongoose.connect(Url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>console.log(`connected to databse`))
        .catch((err)=>console.log(err));
    } catch (error) {
        console.log(error);
    }
 }

module.exports = connect;
