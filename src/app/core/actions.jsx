import { createAction } from "redux-actions";
import * as types from "./actionTypes";

export const init = createAction(types.INIT_BEGIN, (value) => value);
export const initComplete = createAction(types.INIT_COMPLETE, (value) => value);
export const initError = createAction(types.INIT_ERROR, (value) => value);

export const login = createAction(types.LOGIN_BEGIN, (value) => value);
export const loginComplete = createAction(
  types.LOGIN_COMPLETE,
  (value) => value
);
export const loginError = createAction(types.LOGIN_ERROR, (value) => value);
