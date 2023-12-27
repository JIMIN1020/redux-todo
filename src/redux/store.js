import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // redux toolkit의 기본 middleware 가져오기 -> 이후에 다른 middleware를 끼워넣기 위해서
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware];
  },
});

export const persistor = persistStore(store);

export default store;
