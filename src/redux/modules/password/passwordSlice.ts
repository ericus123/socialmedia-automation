import { createSlice } from "@reduxjs/toolkit";

type PasswordResetStep = "initial" | "pending" | "fail" | "form" | "success";

export interface PasswordResetState {
  resetStep: PasswordResetStep;
  resetEmail?: string;
}

const initialState: PasswordResetState = {
  resetStep: "initial"
};

const passwordSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    saveResetEmail(
      state,
      {
        payload
      }: {
        payload: undefined | string;
      }
    ) {
      state.resetEmail = payload;
    },
    changeResetStep(
      state,
      {
        payload
      }: {
        payload: PasswordResetStep;
      }
    ) {
      state.resetStep = payload;
    }
  }
});

export const { saveResetEmail, changeResetStep } = passwordSlice.actions;

export default passwordSlice.reducer;
