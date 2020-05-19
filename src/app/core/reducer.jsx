import { handleActions } from "redux-actions";
import * as actions from "./actions";
import * as constants from "./constants";

export const defaultState = {
  loader: {},
  error: {},
  profile: null,
};

export default handleActions(
  {
    /* INIT ACTION  */
    [actions.init]: (state, action, meta) => ({
      ...state,
      loader: {
        ...state.loader,
        [constants.INIT]: true,
      },
    }),
    [actions.initComplete]: (state, action, meta) => ({
      ...state,
      loader: {
        ...state.loader,
        [constants.INIT]: false,
      },
      profile: action.payload ? { ...action.payload } : null,
    }),
    [actions.initError]: (state, action, meta) => ({
      ...state,
      loader: {
        ...state.loader,
        [constants.INIT]: false,
      },
      errors: {
        ...state.error,
        [constants.INIT]: action.payload.message,
      },
    }),
    /* LOGIN ACTION  */
    [actions.login]: (state, action, meta) => ({
      ...state,
      loader: {
        ...state.loader,
        [constants.LOGIN]: true,
      },
    }),
    [actions.loginComplete]: (state, action, meta) => ({
      ...state,
      loader: {
        ...state.loader,
        [constants.LOGIN]: false,
      },
      profile: action.payload ? action.payload : null,
    }),
    [actions.loginError]: (state, action, meta) => ({
      ...state,
      loader: {
        ...state.loader,
        [constants.LOGIN]: false,
      },
      errors: {
        ...state.error,
        [constants.LOGIN]: action.payload.message,
      },
    }),
  },
  defaultState
);
