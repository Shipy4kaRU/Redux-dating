import { createSlice } from "@reduxjs/toolkit";

const initialUserAuthState = { isUserLoggedIn: false };

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialUserAuthState,
  reducers: {
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    signOut(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const userAuthSliceActions = userAuthSlice.actions;
export default userAuthSlice.reducer;
