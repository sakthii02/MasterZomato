import {  createStore , applyMiddleware} from "redux";
import rootReducer from "./Reducer/root.Reducer";

import thunk from "redux-thunk";

const middlewares = [thunk];

if(process.env.NODE_ENV=== "deployment"){
      const {logger} = require("redux-logger");
      middlewares.push(logger);
}



const store = createStore(rootReducer , {} , applyMiddleware(...middlewares));

export default store;  