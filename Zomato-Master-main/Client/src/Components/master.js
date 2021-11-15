import React from "react";
import { useParams } from "react-router";


//components
import Brand from "./Delivery/Brand";
import Delivery from "./Delivery";
import Dining from "./Dining/index";
import NightLife from "./NightLife";


const Master = () => {
    
    const {type} = useParams();
    return (<>
         <div className="mx-8 px-9 my-5  ">

           
           {type==="delivery" && <Brand/>}
           {type==="delivery" && <Delivery/>} 
           {type==="dining" && <Dining/>} 
           {type==="night" && <NightLife/>}  
            
            
           
         </div> 
  
    </>     
    );
        
}  




export default Master;    