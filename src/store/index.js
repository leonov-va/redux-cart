import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

const logger = (store) => (next) => (action) => {
  console.log("Предыдущее состояние", store.getState());
  console.log("Экшен", action.type);
  next(action);
  console.log("Новое состояние", store.getState());
};

export default createStore(reducers, applyMiddleware(logger));
