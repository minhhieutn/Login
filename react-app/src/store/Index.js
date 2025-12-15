import filteredReducer from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(filteredReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
