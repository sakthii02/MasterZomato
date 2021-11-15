import AWS from "aws-sdk";



const s3Bucket = new AWS.S3({
    accessKeyId: "put their id" ,
    secretAccessKey: "put their key",
    region:"ap-south-1"
});

export const s3Upload = (options) =>{
    return new Promise((resolve, reject) => 
       s3Bucket.upload(options , (error , data)=>{
           if(error) return reject(error);
           else return resolve(data);
       })
 )};    