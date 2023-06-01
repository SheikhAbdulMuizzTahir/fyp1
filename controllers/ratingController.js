import {Review} from "../models/Reviews.js";
import {Model} from "../models/Models.js";
import {Recruiter} from "../models/Recruiters.js";

//model can give rating to recruiter
export const addReview = async (req, res) => {
    //if ratedby is true, model gives review to recruiter
    //otherwise recruiter gives review to mode

    const {modelID, recruiterID, rating, ratedby} = req.body;
    try {
        
        const review = await Review.create({ modelID, recruiterID, rating, ratedby });
        if (ratedby) {
            const recruiter = await Recruiter.findById(recruiterID);
            // Count the number of reviews
            const count = await Review.countDocuments({ recruiterID, ratedby: true });
            // Calculate the average rating
            recruiter.rating = (recruiter.rating * (count - 1) + rating) / count;
            await recruiter.save();
        } else {
            const model = await Model.findById(modelID);
            const count = await Review.countDocuments({ modelID, ratedby: false });
            model.rating = (model.rating * (count - 1) + rating) / count;
            await model.save();
        }
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//   