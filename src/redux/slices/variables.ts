import { createSlice } from "@reduxjs/toolkit";

interface MyState {
  showContributeModal?: boolean;
  showCongratsModal?: boolean;
  transactionSuccessful?: string;
  transactionHash?: string;
  transactionData?: any;
}

const initialState: MyState = {
  showContributeModal: false,
  showCongratsModal: false,
  transactionSuccessful: "",
  transactionHash: "",
  transactionData: {},
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
    handleHash: (state, action) => {
      state.transactionHash = action.payload;
    },
    handleTransactionSuccess: (state, action) => {
      state.transactionSuccessful = action.payload;
    },
    handleTransactionData: (state, action) => {
      state.transactionData = action.payload;
    },
  },
});

export const {
  handleContributeModal,
  handleCongratsModal,
  handleTransactionSuccess,
  handleHash,
  handleTransactionData,
} = variables.actions;
export default variables.reducer;
