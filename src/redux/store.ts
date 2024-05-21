import { configureStore } from "@reduxjs/toolkit";
import VariableSlice from "@/redux/slices/variables";
import ToastSlice from "@/redux/slices/toastSlice";
import AuthSlice from "@/redux/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    variables: VariableSlice,
    toast: ToastSlice,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
