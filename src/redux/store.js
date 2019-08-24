import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer } from "redux-persist";
import { autoMergeLevel2 } from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "betAssist",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["stats"],
  blacklist: []
};

const middlewares = [];

// Add logging on in development only
if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
    duration: true
  });
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const defaultState = {};

// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  persistedReducer,
  defaultState,
  composeEnhancers(applyMiddleware(...middlewares))
);
