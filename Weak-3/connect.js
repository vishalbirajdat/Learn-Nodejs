const mongoose = require(`mongoose`);
mongoose.set("strictQuery", false);
const urlMongoDB = 'mongodb://localhost:27017/mongooseDB';
async function main() {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 const connect = await mongoose.connect(urlMongoDB,  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }, ()=>{
    console.log("Connected successfully");
  });

}



main().catch(err => console.log(err));
