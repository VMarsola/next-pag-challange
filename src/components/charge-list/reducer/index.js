import { combineReducers } from "redux";

export const chargeList = (state = [], { type, payload }) => {
  switch (type) {
    case "CHARGES_SET":
      return payload;

    default:
      return state;
  }
};

export const loading = (state = false, { type }) => {
  switch (type) {
    case "CHARGES_LOADING":
      return true;

    case "CHARGES_SET":
    case "CHARGES_ERROR":
      return false;

    default:
      return state;
  }
};

export const error = (state = false, { type }) => {
  switch (type) {
    case "CHARGES_ERROR":
      return true;
    case "CHARGES_SET":
      return false;
    default:
      return state;
  }
};

export default combineReducers({ chargeList, loading, error });
