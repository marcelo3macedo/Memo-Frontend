import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { rootReducer } from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import persistReducers from "./persistReducers";

const sagaMonitor = /*process.env.NODE_ENV == "development" 
    ? console.tron.createSagaMonitor()
    :*/ null;
const sagaMiddleware = createSagaMiddleware({
    sagaMonitor,
});

const enhancer = /*process.env.NODE_ENV === "development" 
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
:*/ applyMiddleware(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store , persistor };