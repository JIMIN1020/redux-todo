import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  // redux toolkit의 기본 middleware 가져오기 -> 이후에 다른 middleware를 끼워넣기 위해서
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware];
  },
});

export default store;
