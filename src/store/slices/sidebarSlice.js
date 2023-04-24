import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barType: "",
  currentlyActiveLink: "",
  doActiveLinkHasSubLink: false,
  submenuLinksFor: "",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    addBarType(state, action) {
      state.barType = action.payload.bar;
      state.currentlyActiveLink = action.payload.currentActive;
      state.doActiveLinkHasSubLink = action.payload.hasSubLink;
      state.submenuLinksFor = action.payload.dependantLink;
    },
  },
});

export const { addBarType } = sidebarSlice.actions;

export default sidebarSlice.reducer;
