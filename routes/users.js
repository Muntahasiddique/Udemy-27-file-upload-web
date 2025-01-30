const express = require('express');

const router = express.Router();
const multer = require('multer');
const db = require('../data/database')
 const storageConfig = multer.diskStorage({destination: function(req , file , cb){
  cb(null , 'images');
 } ,filename: function(req , file , cb){
  cb(null , Date.now() + '-' + file.originalname)
 }})

const upload = multer({storage: storageConfig  });
router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post('/profiles' , upload.single('image') , function(req , res){
const uploadedImageFile =req.file;
const userData = req.body;
console.log(uploadedImageFile );
res.redirect('/')
})
module.exports = router;