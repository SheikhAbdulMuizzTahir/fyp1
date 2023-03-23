const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
    Sender_ID:{type:String},
    message:{types:String},
    chatID:{type:String},
},
{timestamps:true,}
);

const Message = mongoose.model('Message',ChatMessageSchema);
module.exports = Message;