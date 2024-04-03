import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSmallNav: false,
  showSmallNavButton: false,
  title: "",
  subtitle: "",
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setShowSmallNav: (state, action) => {
      state.showSmallNav = action.payload;
    },
    setShowSmallNavButton: (state, action) => {
      state.showSmallNavButton = action.payload;
    },
    setNavigationTitles: (state, action) => {
      state.title = action.payload.title || "";
      state.subtitle = action.payload.subtitle || "";
    },
  },
});

export const { setShowSmallNav, setShowSmallNavButton, setNavigationTitles } =
  modulesSlice.actions;
export default modulesSlice.reducer;
