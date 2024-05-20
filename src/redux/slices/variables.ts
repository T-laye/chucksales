import { createSlice } from "@reduxjs/toolkit";

interface MyState {
  showContributeModal?: boolean;
  showCongratsModal?: boolean;
  transactionSuccessful?: string;
  transactionHash?: string;
  transactionData?: any;
  transactionDataFetch?: boolean;
}

const initialState: MyState = {
  showContributeModal: false,
  showCongratsModal: false,
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
    handleTransactionData: (state, action) => {
      state.transactionData = action.payload;
    },
  },
});

export const {
  handleContributeModal,
  handleCongratsModal,
  handleHash,
  handleTransactionData,
  
} = variables.actions;
export default variables.reducer;
