import * as Types from "./types";

/* Default User State */
export const defaultState = {
  name: ""
};

/* ACTION CREATORS */

// RESET all
export const resetConfigData = () => {
  return {
    type: Types.RESET_CONFIG_DATA,
    payload: defaultState
  };
};

// SET
export const setConfigName = name => {
  return {
    type: Types.SET_CONFIG_NAME,
    payload: name
  };
};
