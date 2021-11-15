//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

// validations 
import { ValidateRestaurantId } from "../../validation/food";
import {ValidateFoodMenus} from "../../validation/menu"
import { ValidateLocation } from "../../validation/image";

/*
Route             /list
Description       Get the list of menu based on id
Parameters        id
Access            Public
Method            GET
*/

Router.get("/list/:_id", async(req,res) => {
    try{
        await ValidateRestaurantId(req.params);
    
        const {_id} = req.params; 
        const menus = await MenuModel.findOne(_id);

     return res.json({menus});
  
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route             /image
Description       Get menu image based on id
Parameters        id
Access            Public
Method            GET
*/

 Router.get("/image/:_id", async(req,res) => {
     try{
         await ValidateRestaurantId(req.params);

          const {_id} = req.params;
          const menus = await ImageModel.findOne(_id);

          return res.json({menus});
     }catch(error){
         return res.status(500).json({error: error.message});
     }
   
 });





export default Router; 