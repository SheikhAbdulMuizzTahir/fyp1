const router = require('express').Router();

const json = require('express');
let Model = require('../models/Models');

router.route('/').get((req,res)=>{
    Model.find()
    .then(Model =>res.json(Model))
    .catch(err=>res.status(400).json('Error: '+ err));
});
router.route('/:id').get((req,res)=>{
    Model.findById(req.param.id)
    .then(Model=>res.json(Model))
    .catch(err=>res.status(400).json("Error"+err))
});
router.route('/delete/:id').delete((req,res)=>{
    Model.findByIdAndDelete(req.param.id)
    .then(()=>res.json('Model Deleted'))
    .catch(err=>res.status(400).json("Error"+err))
});

router.route('/login').post((req,res)=>{
    const {username,password}=req.body;
    Model.findOne({"name":username,"password":password})
    .then(Model =>res.json(Model))
    .catch(err=>res.status(400).json('Error: '+ err));
    

});

router.route('/search').post((req,res)=>{


    Model.find({
    "gender":req.body.gender,
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
    .then(Model=>res.json(Model))
    .catch(err=>res.status(400).json('Err'+err))
});
router.route('/register').post((req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phoneno= req.body.phoneno;
    const gender = req.body.gender;
    const birthdate= req.body.birthdate;
    const profilePic= req.body.profilePic;
    const height= req.body.height;
    const weight= req.body.weight;
    const hairColor= req.body.hairColor;
    const eyeColor= req.body.eyeColor;
    const waist= req.body.waist;
    const dressSize= req.body.dressSize;
    const shoeSize= req.body.shoeSize;
    const experience= req.body.experience;
    const ethnicity= req.body.ethnicity;
    const nationality= req.body.nationality;
    const gallery = req.body.gallery;
    const bodyType= req.body.bodyType;
    const facebook= req.body.facebook;
    const instagram= req.body.instagram;
    const twitter= req.body.twitter;
    const linkedin= req.body.linkedin;
    
    console.log(facebook,instagram,linkedin,twitter);
    const newModel = new Model({
        name,
        email,
        password,
        phoneno,
        gender,
        birthdate,
        profilePic,
        height,
        weight,
        hairColor,
        eyeColor,
        waist,
        dressSize,
        shoeSize,
        experience,
        ethnicity,
        nationality,
        gallery,
        bodyType,
        facebook,
        instagram,
        twitter,
        linkedin,
  });
  newModel.save()
  .then(()=> res.json('Registered'))
//   .then(err=>res.status(400).json('ErroR'+err));

});
router.route('/update/:id').post((req,res)=>{
    Model.findById(req.params.id)
    .then(Model=>{
    Model.name = req.body.name;
    Model.email = req.body.email;
    Model.password = req.body.password;
    Model.phoneno= req.body.phoneno;
    Model.gender = req.body.gender;
    Model.birthdate= req.body.birthdate;
    Model.profilePic= req.body.profilePic;
    Model.height= req.body.height;
    Model.weight= req.body.weight;
    Model.hairColor= req.body.hairColor;
    Model.eyeColor= req.body.eyeColor;
    Model.waist= req.body.waist;
    Model.dressSize= req.body.dressSize;
    Model.shoeSize= req.body.shoeSize;
    Model.experience= req.body.experience;
    Model.ethnicity= req.body.ethnicity;
    Model.nationality= req.body.nationality;
    Model.gallery = req.body.gallery;
    Model.bodyType= req.body.bodyType;
    Model.facebook= req.body.facebook;
    Model.instagram= req.body.instagram;
    Model.twitter= req.body.twitter;
    Model.linkedin= req.body.linkedin;

    Model.save()
    .then(()=>res.json("Model Updated"))
    .catch(err=>res.status(400).json('Error'+err))

    }).catch(err=>res.status(400).json('Error'+err))

});

router.route("/addpictures").post((req,res)=>{
    Model.findById(req.params.id)
    .then(Model=>{Model.gallery=req.body.gallery
    
        Model.save()
    .then(()=>res.json("Model Updated"))
    .catch(err=>res.status(400).json('Error'+err))
    }).catch(err=>res.status(400).json('Error'+err))
});
module.exports = router;