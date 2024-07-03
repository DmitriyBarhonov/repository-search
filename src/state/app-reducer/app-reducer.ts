import { createSlice, isFulfilled, isPending } from "@reduxjs/toolkit";
import { getCardRepository } from "../card-reducer";
import { getListRepository, getListTopRepository } from "../repository-reducer";

type initialStateType = {
  isLoading: boolean;
};

const initialState: initialStateType = {
  isLoading: false,
};

const appSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isPending(getCardRepository, getListRepository, getListTopRepository),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isFulfilled(getCardRepository, getListRepository, getListTopRepository),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const appReducer = appSlice.reducer;
