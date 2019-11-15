import actionTypes from "./categories.types";

export const categoriesRequest = () => ({
  types: actionTypes.CATEGORIES_REQUEST
});

export const categoriesRequestSuccess = () => ({
  types: actionTypes.CATEGORIES_REQUEST_SUCCESS
});

export const categoriesRequestFailure = () => ({
  types: actionTypes.CATEGORIES_REQUEST_FAILURE
});