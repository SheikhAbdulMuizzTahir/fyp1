import Express from "express";
import { Review } from "../models/Reviews.js";

export const router = Express.Router();



router.route("/").get((req, res) => {
  Review.find()
    .then((Review) => res.json(Review))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Review.findById(req.param.id)
    .then((Review) => res.json(Review))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/delete/:id").delete((req, res) => {
  Review.findByIdAndDelete(req.param.id)
    .then(() => res.json("Review Deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

// router.route('/search').post((req,res)=>{

//     Review.find({
//     "gender":req.body.gender,
//     "birthdate":{$gt:req.body.lowerage,$lt:req.body.upperage},
//     "height":{$gt:req.body.heightgt,$lt:req.body.heightlt},
//     "weight":{$gt:req.body.weightgt,$lt:req.body.weightlt},
//     "hairColor":{$in:req.body.hairColor},
//     "eyeColor":{$in:req.body.eyeColor},
//     "waist":{$gt:req.body.waisttgt,$lt:req.body.waistlt},
//     "dressSize":{$gt:req.body.dressSizegt,$lt:req.body.dressSizelt},
//     "shoeSize":{$gt:req.body.shoeSizegt,$lt:req.body.shoeSizelt},
//     "experiece":{$gt:req.body.experiencegt,$lt:req.body.experiecelt},
//     "ethnicity":{$in:req.body.ethnicity},
//     "nationality":{$in:req.body.nationality}

// })
//     .then(Review=>res.json(Review))
//     .catch(err=>res.status(400).json('Err'+err))
// });
router.route("/new").post((req, res) => {
  const review = req.body.review;
  const rating = req.body.rating;
  const modelID = req.body.modelID;
  const recruiterID = req.body.recruiterID;

  console.log(review, rating, modelID, recruiterID);
  const newReview = new Review({
    review,
    rating,
    modelID,
    recruiterID,
  });
  newReview.save().then(() => res.json("Registered"));
  //   .then(err=>res.status(400).json('ErroR'+err));
});
router.route("/update/:id").post((req, res) => {
  Review.findById(req.params.id)
    .then((Review) => {
      Review.review = req.body.review;
      Review.rating = req.body.rating;
      Review.modelID = req.body.modelID;
      Review.recruiterID = req.body.recruiterID;

      Review.save()
        .then(() => res.json("Review Updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/model").post((req, res) => {
  console.log(req.body.modelID);
  Review.find({ modelID: req.body.modelID })
    .then((Review) => res.json(Review))
    .catch((err) => res.status(400).json("Error" + err));
});

