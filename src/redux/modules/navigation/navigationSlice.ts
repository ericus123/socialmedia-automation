import { createSlice } from "@reduxjs/toolkit";

export interface NavigationSliceState {
  route: string;
  isDrawerOpen: boolean;
  activeLink: string;
  isDarkTheme: boolean;
  isDashboardDrawerOpen: boolean;
}

const initialState: NavigationSliceState = {
  route: "/",
  isDrawerOpen: false,
  activeLink: "",
  isDarkTheme: false,
  isDashboardDrawerOpen: false
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    handleDrawer: (
      state,
      {
        payload
      }: {
        payload: boolean;
      }
    ) => {
      state.isDrawerOpen = payload;
    },
    handleDashboardDrawer: (
      state,
      {
        payload
      }: {
        payload: boolean;
      }
    ) => {
      state.isDashboardDrawerOpen = payload;
    },
    handleThemeToogle: (state, { payload }: { payload: boolean }) => {
      state.isDarkTheme = payload;
    }
  }
});

export const { handleDrawer, handleThemeToogle, handleDashboardDrawer } =
  navigationSlice.actions;

export default navigationSlice.reducer;
