const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    modelID:{type:Schema.Types.ObjectId,ref:'Model',required:true},
    recruiterID:{type:Schema.Types.ObjectId,ref:'User',required:true},
    rating:{type:Number,required:true},
    review : {type:String}
});

const Reviews = mongoose.model('Reviews',ReviewSchema);
module.exports = Review;