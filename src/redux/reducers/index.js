import { combineReducers } from "redux";
import statsReducer from "./stats/statsReducers";

/*
Import individual reducers for each state.part, 
and add to combineReducers as named attribute.
*/
export default combineReducers({
  stats: statsReducer
});
