import { combineReducers } from "redux";
import productReducer from "./products";

export default combineReducers({
  products: productReducer,
});

// Example implements combine function
// function combineReducers(reducers) {
//   const initialStore = {};
//   const keys = Object.keys(reducers);

//   return (store = initialStore, action) => {
//     Object.values(reducers).forEach((reducer, i) => {
//       initialStore[keys[i]] = reducer(initialStore[keys[i]] || {}, action);
//     });

//     return initialStore;
//   };
// }
