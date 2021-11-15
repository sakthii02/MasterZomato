import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

//validation 
import {ValidateSignin, ValidateSignup } from "../../validation/auth";


/*
Route             /
Description       Get an user data
parameter         _id
Body               none
Access            Public
Method            GET
*/

Router.post("/new", async(req, res)=>{
  try{
      
       const {_id} = req.params;
       const getUser = await UserModel.findById(_id);
       return res.json({user: getUser});
   
  }catch(error){
      return res.status(500).json({error: error.message});
  }
});

/*
Route             /update
Description       update an user data
parameter         _userId
Body               user data
Access            Public
Method            GET
*/
Router.post("/update/:_userId", async(req, res)=>{
  try{
      
       const {userId} = req.params;
       const {userData} = req.body;
       const updateUserData = await UserModel.findByIdAndUpdate(
         userId,
         {
           $set: userData
         },
         {new: true}
       );

       return res.json({user: updateUserData});
   
  }catch(error){
      return res.status(500).json({error: error.message});
  }
});
  
  export default Router;