import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert(state, action) {
      return [...state, { ...action.payload }];
    },
    removeAlert(state, action) {
      return state.filter((fl) => fl.id !== action.payload);
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
