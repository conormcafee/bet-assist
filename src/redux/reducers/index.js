import { combineReducers } from "redux";
import dataReducer from "./data/reducers";

/*
Import individual reducers for each state.part, 
and add to combineReducers as named attribute.
*/
export default combineReducers({
  data: dataReducer
});
