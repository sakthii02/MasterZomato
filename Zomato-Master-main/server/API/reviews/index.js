import express from "express";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

//validation
import { ValidateReview} from "../../validation/reviews"


 /*    
Route             /new
Description       add new review
parameter         none
body              Review object
Access            Public
Method            POST
*/

Router.post("/new", async(req, res)=>{
    try{
      await ValidateReview(req.body);
      const {reviewData} = req.body;
      await  ReviewModel.create(reviewData);
      return res.json({review: "Successfully created review" });

    }catch(error){
        return res.status(500).json({error: error.message});
    }
  });
  /*    
Route             /delete
Description       Delete a review
parameter         _id
Access            Public
Method            DELETE
*/
Router.delete("/delete/:_id", async(req, res)=>{
    try{
      await ValidateReview(req.body);
      const {_id} = req.params;

      await  ReviewModel.findByIdAndDelete(_id);
      
      return res.json({review: "Successfully deleted review" });

    }catch(error){
        return res.status(500).json({error: error.message});
    }
  });
  
  export default Router;