import joi from "joi";


 export const ValidateReview = (reviewObj) =>{

    const Schema = joi.object({
         rating: joi.number(),
         reviewText: joi.string() ,
         isRestaurantReview: joi.boolean(),
         isFoodReview: joi.boolean()
        
    });

    return Schema.validateAsync(reviewObj);
};    

    