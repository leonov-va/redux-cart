import * as constants from "../constants/products";

export const addProduct = (payload) => ({
  type: constants.ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload) => ({
  type: constants.REMOVE_PRODUCT,
  payload,
});
