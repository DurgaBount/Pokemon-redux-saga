import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import PokemanReducer from "./reducers/PokemanReducer";
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root", // Key under which your store will be saved in localStorage
  storage, // Storage backend, e.g., localStorage
};

const persistedReducer = persistReducer(persistConfig, PokemanReducer);

const store = configureStore({
  reducer: {
    pokeman: persistedReducer,
  },
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
