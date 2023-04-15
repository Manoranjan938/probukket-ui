import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: [],
  message: "",
};

const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError(state, action) {},
    removeError(state, action) {},
  },
});

export const { addError, removeError } = errorSlice.actions;
export default errorSlice.reducer;
