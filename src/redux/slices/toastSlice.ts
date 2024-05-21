import { createSlice } from "@reduxjs/toolkit";

interface MyState {
  message: string;
  duration: number; // Duration in milliseconds
  visible: boolean;
  color: string;
}

const initialState: MyState = {
  message: "",
  duration: 3000, // Duration in milliseconds
  visible: false,
  color:'bg-primary'
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.color = action.payload.color;
      state.duration = action.payload.duration || initialState.duration; // Set duration from payload or use default
      state.visible = true;
    },
    hideToast: (state) => {
      state.visible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
