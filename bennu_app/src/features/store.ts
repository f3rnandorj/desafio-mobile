import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";

import {MMKVStorage} from "@services";

import todoReducer from "./todo/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: "root",
  storage: MMKVStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type PersistedRootState = ReturnType<typeof persistedReducer>;

export function setupStore(preloadedState?: PersistedRootState) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
