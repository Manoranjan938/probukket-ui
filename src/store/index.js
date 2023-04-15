import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import errorReducer from "./slices/errorSlices";
import sidebarReducer from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    sidebar: sidebarReducer,
    errors: errorReducer,
  },
});
