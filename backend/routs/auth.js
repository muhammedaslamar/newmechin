const express = require('express');
const router = express.Router();
const User=require('../models/user')
var bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

JWT_SECRET='aslamkkakey'

// Route to register a new account
router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
  
    try {
      hspword=bcrypt.hashSync(password)
      // Create a new user instance
      const user = new User({
        email,
        username,
        password:hspword
      });
  
      // Save the user to the database
      await user.save();
      res.status(200).json({message:"signup succsessfull"})
    } catch (err) {
      res.status(200).json({message:"Is alredy exist"});
    }
  });

  // Route to Login account
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {

      user= await User.findOne({email:req.body.email})
      if(!user){
        res.status(200).json({message:"User Is not exist"});
      }

      const isPwdCorrect=bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if(!isPwdCorrect){
        res.status(200).json({message:"Passsword is incorrect"});
      }

      const {password,...others}=user._doc
      //res.status(200).json({others})

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token:token,others:others});

    } catch (err) {
      res.status(200).json({message:"Is alredy exist"});
    }
  });

 
      

  
module.exports=router;