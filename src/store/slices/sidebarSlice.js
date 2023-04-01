import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentlyActiveLink: "",
  doActiveLinkHasSubLink: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
});

export default sidebarSlice.reducer;
