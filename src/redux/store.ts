import { configureStore } from "@reduxjs/toolkit";
import VariableSlice from "@/redux/slices/variables";

const store = configureStore({
  reducer: {
    variables: VariableSlice,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
