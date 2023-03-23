const router = require('express').Router();
let Model = require('../models/Models');

router.route('/').get((req,res)=>{
    Model.find()
    .then(Model =>res.json(Model))
    .catch(err=>res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
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
    const description= req.body.description;
    const facebook= req.body.facebook;
    const instagram= req.body.instagram;
    const twitter= req.body.twitter;
    const linkedin= req.body.linkedin;
    
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
        description,
        facebook,
        instagram,
        twitter,
        linkedin,
  });
  newModel.save()
  .then(()=> res.json('MOdel AdDed'))
  .then(err=>res.status(400).json('ErroR'+err));
});
module.exports = router;