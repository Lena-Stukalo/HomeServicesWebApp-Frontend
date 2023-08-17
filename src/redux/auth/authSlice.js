import { createSlice } from "@reduxjs/toolkit";
import authOperation from "./authOperations";
const initialState = {
  token: null,
  isLoggedIn: false,
  user: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.isLoggedIn = false;
    },
    [authOperation.register.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [authOperation.login.fulfilled](state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.login.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [authOperation.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.logout.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [authOperation.currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperation.currentUser.rejected](state, action) {
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
