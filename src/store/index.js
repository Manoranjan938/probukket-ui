import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import sidebarReducer from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    sidebar: sidebarReducer,
  },
});
