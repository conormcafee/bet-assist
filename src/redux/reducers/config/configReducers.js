import { defaultState } from "./configActions";
import * as Types from "./types";

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.RESET_CONFIG_DATA:
      return {
        ...action.payload
      };
    case Types.SET_CONFIG_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
