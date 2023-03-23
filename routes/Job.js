const router = require('express').Router();

const json = require('express');
let Job = require('../models/Jobs');

router.route('/').get((req,res)=>{
    Job.find()
    .then(Job =>res.json(Job))
    .catch(err=>res.status(400).json('Error: '+ err));
});
router.route('/:id').get((req,res)=>{
    Job.findById(req.param.id)
    .then(Job=>res.json(Job))
    .catch(err=>res.status(400).json("Error"+err))
});
router.route('/delete/:id').delete((req,res)=>{
    Job.findByIdAndDelete(req.param.id)
    .then(()=>res.json('Job Deleted'))
    .catch(err=>res.status(400).json("Error"+err))
});



router.route('/search').post((req,res)=>{


    Job.find({
    "gender":req.body.gender,
    "paymentInfo":{$in:req.body.paymentInfo},
    "birthdate":{$gt:req.body.lowerage,$lt:req.body.upperage},
    "height":{$gt:req.body.heightgt,$lt:req.body.heightlt},
    "weight":{$gt:req.body.weightgt,$lt:req.body.weightlt},
    "hairColor":{$in:req.body.hairColor},
    "eyeColor":{$in:req.body.eyeColor},
    "waist":{$gt:req.body.waisttgt,$lt:req.body.waistlt},
    "dressSize":{$gt:req.body.dressSizegt,$lt:req.body.dressSizelt},
    "shoeSize":{$gt:req.body.shoeSizegt,$lt:req.body.shoeSizelt},
    "experiece":{$gt:req.body.experiencegt,$lt:req.body.experiecelt},
    "ethnicity":{$in:req.body.ethnicity},
    "nationality":{$in:req.body.nationality},
    "bodyType":{$in:req.body.bodyType}
   


})
    .then(Job=>res.json(Job))
    .catch(err=>res.status(400).json('Err'+err))
});
router.route('/new').post((req,res)=>{
    const jobtitle = req.body.jobtitle;
    const jobDescription = req.body.jobDescription;
    const recruiterID = req.body.recruiterID;
    const paymentInfo = req.body.paymentInfo;
    const gender = req.body.gender;
    const height= req.body.height;
    const weight= req.body.weight;
    const hairColor= req.body.hairColor;
    const eyeColor= req.body.eyeColor;
    const waist= req.body.waist;
    const dressSize= req.body.dressSize;
    const shoeSize= req.body.shoeSize;
    const ethnicity= req.body.ethnicity;
    const nationality= req.body.nationality;
    const bodyType = req.body.bodyType;

    
    //console.log(name,email,password);
    const newJob = new Job({
        jobtitle,
        jobDescription,
        recruiterID,
        paymentInfo,
        gender,
        height,
        weight,
        hairColor,
        eyeColor,
        waist,
        dressSize,
        shoeSize,
        ethnicity,
        nationality,
        bodyType,
  });
  newJob.save()
  .then(()=> res.json('Registered'))
//   .then(err=>res.status(400).json('ErroR'+err));

});
router.route('/update/:id').post((req,res)=>{
    Job.findById(req.params.id)
    .then(Job=>{
    jobtitle = req.body.jobtitle;
    jobDescription = req.body.jobDescription;
    recruiterID = req.body.recruiterID;
    paymentInfo = req.body.paymentInfo;
    gender = req.body.gender;
    height= req.body.height;
    weight= req.body.weight;
    hairColor= req.body.hairColor;
    eyeColor= req.body.eyeColor;
    waist= req.body.waist;
    dressSize= req.body.dressSize;
    shoeSize= req.body.shoeSize;
    ethnicity= req.body.ethnicity;
    nationality= req.body.nationality;
    bodyType = req.body.bodyType;

    Job.save()
    .then(()=>res.json("Job Updated"))
    .catch(err=>res.status(400).json('Error'+err))

    }).catch(err=>res.status(400).json('Error'+err))

});
module.exports = router;