//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config  
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

   
//API  
import Auth from "./API/Auth";    
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";               
import Orders from "./API/orders";
import Reviews from "./API/reviews";    
import Users from "./API/User";  

//Database connection
import ConnectDB from "./database/connection";
  
const zomato = express();
   
zomato.use(express.json());  
zomato.use(express.urlencoded({extended: false}));   

zomato.use(helmet());
zomato.use(cors());   
zomato.use(passport.initialize());    
zomato.use(passport.session());   
   
//passport configuration 
googleAuthConfig(passport);   
routeConfig(passport);     
     



//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurants",Restaurant );
zomato.use("/food", Food);
zomato.use("/menu", Menu);    
zomato.use("/image",  Image);  
zomato.use("/order", Orders);  
zomato.use("/reviews", Reviews ); 
zomato.use("/user", Users); 


zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));
   
zomato.listen(4000, ()=>
ConnectDB().then(()=>console.log("Server is up and running , All connection have done"))
.catch(()=>console.log("DB connection failed")));    