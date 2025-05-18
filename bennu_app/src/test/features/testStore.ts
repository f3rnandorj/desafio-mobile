import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {todoReducer} from "@features";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export function setupTestStore(preloadedState?: Partial<TestRootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

export type TestRootState = ReturnType<typeof rootReducer>;
export type TestAppStore = ReturnType<typeof setupTestStore>;
export type TestAppDispatch = TestAppStore["dispatch"];
