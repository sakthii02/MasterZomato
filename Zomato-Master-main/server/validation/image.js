import joi from "joi";


 export const ValidateLocation = (imageObj) =>{

    const Schema = joi.object({
        location: joi.string().required()
        
    });

    return Schema.validateAsync(imageObj);
};  
  