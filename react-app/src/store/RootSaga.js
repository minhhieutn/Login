import { all } from "redux-saga/effects";
import { watchFilter } from "./Sagas";

export default function* rootSaga() {
  yield all([watchFilter()]);
}
