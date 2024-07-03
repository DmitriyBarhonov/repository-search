import { createSlice } from "@reduxjs/toolkit";
import { getListRepository } from "./repository-async-actions";
import { Repository } from "./repository-reducer-types";

type initialStateType = {
  repositoryList: Repository[];
  repositoryCount: number
  currentPage: number;
};

const initialState: initialStateType = {
  repositoryList: [],
  repositoryCount: 0,
  currentPage: 1,
};

const resporsSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListRepository.fulfilled, (state, action) => {
      state.repositoryList = action.payload.search.nodes;
      state.repositoryCount = action.payload.search.repositoryCount
    });
  },
});

export const repositoryReducer = resporsSlice.reducer;
export const repositoryActions = resporsSlice.actions.setCurrentPage;
