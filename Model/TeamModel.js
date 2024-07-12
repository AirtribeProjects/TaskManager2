const mongoose = require('mongoose');

const teams = new mongoose.Schema({
        name: {type:String,required:true},
        members: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
        createdAt: {type:Date,default:Date.now()}
});

const Teams = mongoose.model('Teams',teams);
module.exports= Teams;