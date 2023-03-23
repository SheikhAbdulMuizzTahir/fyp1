const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    ModelID:{type:Schema.Types.ObjectId,ref:'Model',required:true},
    recruiterID:{type:Schema.Types.ObjectId,ref:'Recruiter',required:true},
    JobID:{type:Schema.Types.ObjectId,ref:'Jobs',required:true},
});

const Chat = mongoose.model('Chat',ChatSchema);
module.exports = Chat;