import { createSlice } from "@reduxjs/toolkit";

interface MyState {
  showContributeModal?: boolean;
  showCongratsModal?: boolean;
  transactionSuccessful?: string;
  transactionHash?: string;
  transactionData?: any;
  transactionDataFetch?: boolean;
  take?: number;
  pageNumber?: number;
  order?: string;
  search?: string;
  adminNav: boolean;
  defaultDate: string;
}

const initialState: MyState = {
  showContributeModal: false,
  showCongratsModal: false,
  transactionHash: "",
  transactionData: {},
  take: 10,
  pageNumber: 1,
  order: "asc",
  search: "",
  adminNav: false,
  defaultDate: "",
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
    handleTake: (state, action) => {
      state.take = action.payload;
    },
    handlePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    handleOrder: (state, action) => {
      state.order = action.payload;
    },
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
    handleAdminNav: (state, action) => {
      state.adminNav = action.payload;
    },
    handleDate: (state, action) => {
      state.defaultDate = action.payload;
    },
  },
});

export const {
  handleContributeModal,
  handleCongratsModal,
  handleHash,
  handleTransactionData,
  handleOrder,
  handlePageNumber,
  handleTake,
  handleSearch,
  handleAdminNav,
  handleDate,
} = variables.actions;
export default variables.reducer;
