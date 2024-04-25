import { combineReducers } from "@reduxjs/toolkit";
import adoptionSlice from "./adoption/adoptionSlice";
import authSlice from "./auth/authSlice";
import navigationSlice from "./navigation/navigationSlice";
import passwordSlice from "./password/passwordSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice,
  adoption: adoptionSlice,
  auth: authSlice,
  password: passwordSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
