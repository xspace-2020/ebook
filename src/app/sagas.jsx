import { all, fork } from "redux-saga/effects";
import core from "./core";
/*__IMPORT_MODULE__*/

const sagas = [...core.sagas];
/*__IMPORT_SAGAS__*/

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}
