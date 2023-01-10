const  mongoose = require("mongoose");

const schemaStructure = new mongoose.Schema({
    name:String,
    date:{
        type:Date,
        default: Date.now()
    },
    email:{
        type:String,
        required:true
    }
})