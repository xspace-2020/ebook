import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import core from "./core";

/*__IMPORT_MODULE__*/

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    [core.constants.NAME]: core.reducer,
  });
export default createRootReducer;
/*__IMPORT_REDUCER__*/
