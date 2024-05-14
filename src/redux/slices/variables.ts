import { createSlice } from "@reduxjs/toolkit";

interface MyState {
  showContributeModal?: boolean;
  showCongratsModal?: boolean;
}

const initialState: MyState = {
  showContributeModal: false,
  showCongratsModal: false,
};

const variables = createSlice({
  name: "variables",
  initialState,
  reducers: {
    handleContributeModal: (state, action) => {
      state.showContributeModal = action.payload;
    },
    handleCongratsModal: (state, action) => {
      state.showCongratsModal = action.payload;
    },
  },
});

export const { handleContributeModal, handleCongratsModal } = variables.actions;
export default variables.reducer;
