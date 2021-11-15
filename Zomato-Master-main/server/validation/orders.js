import joi from "joi";


 export const ValidateOrderDetails = (detailsObj) =>{

    const Schema = joi.object({
        orderDetails : joi.array().items(object({
            food: joi.string(), 
            quantity: joi.string(),
            payMode: joi.string(), 
            status: joi.string(),
            paymentDetails: joi.string(), 
            itemTotal: joi.number(),
            promo: joi.number(),
            tax: joi.number()
    }))
        
    });  

    return Schema.validateAsync(detailsObj);
};  
export const ValidateOrderRating = (ratingObj) =>{

    const Schema = joi.object({
        orderRatings : joi.number()
        
    });

    return Schema.validateAsync(ratingObj);
};  
  

  