import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";

import {MMKVStorage} from "@services";

import concludedTodoReducer from "./concludedTodo/concludedTodoSlice";
import todoReducer from "./todo/todoSlice";

const persistConfig = {
  key: "root",
  storage: MMKVStorage,
};

const rootReducer = combineReducers({
  todo: todoReducer,
  concludedTodo: concludedTodoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
