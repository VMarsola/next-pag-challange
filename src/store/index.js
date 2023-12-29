import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import randomWord from "@/components/random-word/reducer";
import chargeList from "@/components/charge-list/reducer";

//adicionar reducer aqui;
const rootReducer = combineReducers({ randomWord, chargeList });

export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));
