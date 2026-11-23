import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageModule from "redux-persist/lib/storage/index.js";
import surveyReducer from "./slices/surveySlice";

const storage = storageModule.default;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  survey: surveyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;