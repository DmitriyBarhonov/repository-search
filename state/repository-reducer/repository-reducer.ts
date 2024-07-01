import { createSlice } from "@reduxjs/toolkit";
import { getRepository } from "./repos-async-actions";

type resporsSliceType = {
  currentRepository: null;
  RepositoryList: null;
  currentPage: number;
  isLoading: boolean;
  error: null;
}

const initialState: resporsSliceType = {
  currentRepository: null,
  RepositoryList: null,
  currentPage: 1,
  isLoading: false,
  error: null,
};

const resporsSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepository.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const resporsReducer = resporsSlice.reducer;
