import { call, put, select, takeLatest } from "redux-saga/effects";
import ServiceFactory from "../../lib/serviceFactory";
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as constants from "./constants";

function* init() {
  try {
    const response = yield call(ServiceFactory.call, constants.INIT_URL);
    yield put(actions.initComplete(response));
    // let profile = yield select(selectors.getProfile);
    // if (profile) yield put(actions.fetchProfile());
  } catch (error) {
    yield put(actions.initError(error));
  }
}

function* login(action) {
  try {
    let response = yield call(
      ServiceFactory.call,
      constants.LOGIN_URL,
      action.payload
    );
    yield put(actions.init());
    yield put(actions.loginComplete(response));
  } catch (error) {
    yield put(actions.loginError(error));
  }
}

function* watchInit() {
  yield takeLatest(actions.init, init);
}

function* watchLogin() {
  yield takeLatest(actions.login, login);
}

export default [watchInit, watchLogin];
