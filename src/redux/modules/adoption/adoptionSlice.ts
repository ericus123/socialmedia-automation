import { createSlice } from "@reduxjs/toolkit";

export type AdoptionActiveSelector = "dog" | "cat" | undefined;

export interface NavigationSliceState {
  activeSelector?: AdoptionActiveSelector;
  isDetailsView: boolean;
}

const initialState: NavigationSliceState = {
  isDetailsView: false
};

const adoptionSlice = createSlice({
  name: "adoption",
  initialState,
  reducers: {
    handleActiveSelector: (
      state,
      {
        payload
      }: {
        payload: AdoptionActiveSelector;
      }
    ) => {
      state.activeSelector = payload;
    },
    handleDetailsView: (state, { payload }: { payload: boolean }) => {
      state.isDetailsView = payload;
    }
  }
});

export const { handleActiveSelector, handleDetailsView } =
  adoptionSlice.actions;

export default adoptionSlice.reducer;
