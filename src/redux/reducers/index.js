import { combineReducers } from "redux";
import configReducer from "./config/configReducers";

/*
Import individual reducers for each state.part, 
and add to combineReducers as named attribute.
*/
export default combineReducers({
  config: configReducer
});
