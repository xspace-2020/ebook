import sagas from "./sagas";
import reducer from "./reducer";
import routes from "./routes";
import * as actions from "./actions";
import * as types from "./actionTypes";
import * as selectors from "./selectors";
import * as constants from "./constants";

export default {
  sagas,
  types,
  routes,
  reducer,
  actions,
  selectors,
  constants,
};
