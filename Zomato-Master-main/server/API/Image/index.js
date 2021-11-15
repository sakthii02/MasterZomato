//Libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database Model
import { ImageModel } from "../../database/allModels";

//Utilities
import {s3Upload} from "../../Utils/AWS/s3";

const Router = express.Router();



//Multer config 
const storage = multer.memoryStorage();
const upload = multer({storage});
   
//AWS S3 bucket config 
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region:"ap-south-1"  
});

 /*    
Route             /
Description       Uploading given image to S3 bucket, and then saving the file to mongoDb.
Access            Public
Method            POST
*/

Router.post("/", upload.single("file") , async(req,res) => {
    try{
   

     const file = req.file;

     //s3 bucket options 
     const bucketOptions = {
         Bucket: "Bucket_name",
         Key: file.originalname,
         Body : file.buffer,
         contentType: file.mimetype,
         ACL: "public-read"
        };

        const uploadImage = await s3Upload(bucketOptions);
    } 
  catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;