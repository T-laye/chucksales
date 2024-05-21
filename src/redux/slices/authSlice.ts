import { createSlice } from "@reduxjs/toolkit";

interface SliceState {
  auth?: Object;
  pending?: boolean;
  error?: boolean;
}

const initialState: SliceState = {
  auth: {},
  pending: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    setCredentials: (state, action) => {
      state.pending = false;
      state.auth = action.payload;
    },
    loginSuccess: (state) => {
      state.pending = false;
    },
    loginError: (state) => {
      state.pending = false;
      state.error = true;
    },
    logout: (state, action) => {
      state.auth = {};
    },
  },
});

export const { setCredentials, loginSuccess, loginError, loginStart, logout } =
  authSlice.actions;

export default authSlice.reducer;
