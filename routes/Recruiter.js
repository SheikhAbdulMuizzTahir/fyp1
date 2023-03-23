const router = require('express').Router();

const json = require('express');
let Recruiter = require('../models/Recruiters');

router.route('/').get((req,res)=>{
    Recruiter.find()
    .then(Recruiter =>res.json(Recruiter))
    .catch(err=>res.status(400).json('Error: '+ err));
});
router.route('/:id').get((req,res)=>{
    Recruiter.findById(req.param.id)
    .then(Recruiter=>res.json(Recruiter))
    .catch(err=>res.status(400).json("Error"+err))
});
router.route('/delete/:id').delete((req,res)=>{
    Recruiter.findByIdAndDelete(req.param.id)
    .then(()=>res.json('Recruiter Deleted'))
    .catch(err=>res.status(400).json("Error"+err))
});

router.route('/login').post((req,res)=>{
    const {name,password}=req.body;
    // console.log(
    //     {name,password}
    // );
    Recruiter.findOne({"name":name,"password":password})
    .then(Recruiter =>res.json(Recruiter))
    .catch(err=>res.status(400).json('Error: '+ err));
    

});

// router.route('/search').post((req,res)=>{


//     Recruiter.find({
//     "category":req.body.category,
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
//     .then(Recruiter=>res.json(Recruiter))
//     .catch(err=>res.status(400).json('Err'+err))
// });
router.route('/register').post((req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone= req.body.phone;
    const category = req.body.category;
    const birthdate = req.body.birthdate;
    const companyName = req.body.companyName;
    const website = req.body.website;
    const location = req.body.location;
    const bio= req.body.bio;
    const facebook= req.body.facebook;
    const instagram= req.body.instagram;
    const twitter= req.body.twitter;
    const linkedin= req.body.linkedin;
    
    //console.log(name,email,password);
    const newRecruiter = new Recruiter({
        name,
        email,
        password,
        phone,
        category,
        birthdate,
        companyName,
        website,
        location,
        bio,
        facebook,
        instagram,
        twitter,
        linkedin,
  });
  newRecruiter.save()
  .then(()=> res.json('Registered'))
//   .then(err=>res.status(400).json('ErroR'+err));

});
router.route('/update/:id').post((req,res)=>{
    Recruiter.findById(req.params.id)
    .then(Recruiter=>{
    Recruiter.name = req.body.name;
    Recruiter.email = req.body.email;
    Recruiter.password = req.body.password;
    Recruiter.phoneno= req.body.phoneno;
    Recruiter.category = req.body.category;
    Recruiter.birthdate= req.body.birthdate;
    Recruiter.profilePic= req.body.profilePic;
    Recruiter.companyName = req.body.companyName;
    Recruiter.website = req.body.website;
    Recruiter.location = req.body.location;
    Recruiter.bio= req.body.bio;
    Recruiter.facebook= req.body.facebook;
    Recruiter.instagram= req.body.instagram;
    Recruiter.twitter= req.body.twitter;
    Recruiter.linkedin= req.body.linkedin;

    Recruiter.save()
    .then(()=>res.json("Recruiter Updated"))
    .catch(err=>res.status(400).json('Error'+err))

    }).catch(err=>res.status(400).json('Error'+err))

});
module.exports = router;