import  express  from "express";

//database model
import { RestaurantModel } from "../../database/allModels";

//validation
import { ValidateRestaurantId } from "../../validation/food";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";

const Router = express.Router();   

/*
Route             /  
Description       Get all Restaurants details     
Parameters        None
Access            Public
Method            GET
*/

Router.get("/", async(req,res)=>{
    try{
      await ValidateRestaurantCity(req.query);
      const {city} = req.query;
      const restaurants = await RestaurantModel.find({city});
      return res.json({restaurants});
    }catch(error){
         return res.status(500).json({error: error.message});
    }
});

/*
Route             /
Description       Get particular Restaurants details based on id 
Parameters        id
Access            Public
Method            GET
*/

Router.get("/:_id", async(req,res) => {
    try{
      await ValidateRestaurantId(req.params);

       const { _id } = req.params;
       const restaurant = await RestaurantModel.findOne(_id);

       if(!restaurant){
       return res.status(404).json({error: "Restaurant not found"}); 
       }
       
    return res.json(restaurant);
    
       }catch(error){
         return res.status(500).json({error: error.message});
    }
});

/*
Route             /search
Description       Get  Restaurants details  on search
Parameters        none
Body              searchString
Access            Public
Method            GET
*/

Router.get("/search", async(req,res)=>{
  try{
     
    await ValidateRestaurantSearchString(req.body);
       const {searchString} = req.body;

       const restaurants = await RestaurantModel.find({
         name: {$regex: searchString, $options:"i"},
         // 1.regex will find the matching searches typed in the search box, 
         //even a single letter will find same data which has same letter in the spelling. 

         //2.options is in-sensitive because the types searches it will not affect the small letters and capital letters .
       });  
  }catch(error){
     return res.status(500).json({error:error.message});
  }
});



export default Router;
