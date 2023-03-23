const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    jobtitle:{type:String,required:true},
    jobDescription:{type:String,required:true,},
    jobTags:{type:String},
    recruiterID:{type:Schema.Types.ObjectId,ref:'User',required:true},
    
});

const Jobs = mongoose.model('Jobs',JobsSchema);
module.exports = Jobs;