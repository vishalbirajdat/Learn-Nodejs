const mongoose = require(`mongoose`);
const validator = require(`validator`)
mongoose.set("strictQuery", false);
const urlMongoDB = "mongodb://127.0.0.1:27017/mongooseDB";
async function main() {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    try {
        await mongoose.connect(urlMongoDB,  {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(()=>console.log(`Welcome to mongoDB`))
          .catch((err)=>console.log(err));

    } catch (error) {
        console.log(error);
    }

  
  const addData = new mongoose.Schema({
    name:String,
    date:{
        type:Date,
        default: Date.now
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        }
    },
    no:Number
  });


//   const raw = new mongoose.Schema({
//     name:{
//         type:String,
//         lowercase:true,
//         unique:false,
//         required:true,
//         minlength:[2, `need length minimum 2`]
//     }
//   })


  const AddData = new mongoose.model("AddData", addData);


  const InsertData = async()=>{
    try{
    const userData = new AddData({
        name:"Rohan",
        email:"vrohan1@gmail.com",
        no:1
      });
        // const result =await userData.save();


        const userData1 = new AddData({
            name:"Rohan",
            email:"12vrohan1@gmail.com",
            no:12
          });




          const userData2 = new AddData({
            name:"145Rohan",
            email:"145vrohan1@gmail.com",
            no:145
          });



          const userData3 = new AddData({
            name:"120Rohan",
            email:"120vrohan1@gmail.com",
            no:120
          });


          const userData4 = new AddData({
            name:"19Rohan",
            email:"56vrohan1@gmail.com",
            no:19
          });


          const userData5 = new AddData({
            name:"Kon",
            email:"45vrohan1@gmail.com",
            no:21
          });

        const result = await AddData.insertMany([userData, userData1, userData2, userData3, userData4,userData5]); 
        console.log(result);
    }catch(error){
            console.log(error);
    }
}





const getData = async()=>{
    // const result = await AddData.find();
    // const result = await AddData.find({name:`Rohan`});
    // const result = await AddData.find({name:`Rohan`}).select({name:1});
    const result = await AddData.find({name:`Rohan`}).select({name:1}).limit(1);
    // const result = await AddData.find();
    console.log(result);
}

const oprationsFindIn = async ()=>{
    // const result = await AddData.find({no:{$gt:12}});
    // const result = await AddData.find({no:{$gte:12}});
    // const result = await AddData.find({no:{$lt:12}});
    // const result = await AddData.find({no:{$lte:12}});
    // const result = await AddData.find({name:{$in :[`Rohan`, `12Rohan`]}});
    const result = await AddData.find({name:{$nin :[`Rohan`, `12Rohan`]}});
    // const result = await AddData.find();
    console.log(result);
}


const localOprations = async ()=>{
    // const result = await AddData.find({$or:[{name:`Rohan`},{no:120}]});
    // const result = await AddData.find({$and:[{name:`Rohan`},{no:120}]});
    const result = await AddData.find({$nor:[{name:`Rohan`},{no:120}]}); // both not exist
    console.log(result);
}


const sortingCount = async ()=>{
    // const result = await AddData.find({$nor:[{name:`Rohan`},{no:120}]}).count();
    // const result = await AddData.find({$nor:[{name:`Rohan`},{no:120}]}).sort();
    const result = await AddData.find().sort({no:1})   // use -1
    console.log(result);
}


const UpdateDataDeleteData = async ()=>{
    // const result = await AddData.updateOne({_id:`63bc4c37ad62c0756906127b`},{
    //     $set: {
    //         no:34
    //     }
    // });


    // const result = await AddData.findByIdAndUpdate({_id:`63bc4c37ad62c0756906127b`},{
    //     $set: {
    //         no:34
    //     }
    // }, {
    //     new : true,
    //     useFindAndModify: false
    // });



    // const result = await AddData.deleteOne({_id:`63bc4c37ad62c0756906127b`});
    const result = await AddData.findByIdAndDelete({_id:`63bc4e2a25691789554796ae`})

    console.log(result);
}

//   InsertData();
//   getData();

// oprationsFindIn();
// localOprations();

// sortingCount();


UpdateDataDeleteData();

 

}



main().catch(err => console.log(err));




