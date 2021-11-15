import joi from "joi";


 export const ValidateFoodMenus = (menus) =>{

    const Schema = joi.object({
    menus : joi.array().items(joi.object({name: joi.string(),items:joi.string()}))
        
    });
    return Schema.validateAsync(menus);
};  

  

  

