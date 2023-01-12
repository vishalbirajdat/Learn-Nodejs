const mongoose = require("mongoose");


const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    bob:{
        type:Date,
        required:true,
    },
    created:{
        type:Date,
        default:Date.now
    },

    country:{
        type:String,
        required:true,
        trim:true
    },
    
    score:{
        type:Number,
        required:true,
    },

    event:{
        type:String,
        default:`100m`
    }
});



const MensRanking = new mongoose.model(`MensRanking`, menSchema);


module.exports = MensRanking;