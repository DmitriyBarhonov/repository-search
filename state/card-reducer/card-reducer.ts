import { createSlice } from "@reduxjs/toolkit";
import { RepositoryCard } from "./card-reducer-types";
import { getCardRepository } from "./card-async-actions";
 

type initialStateType = {
  cardItem: RepositoryCard | null;
};

const initialState: initialStateType = {
  cardItem: null,
};

const repositoryCardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardRepository.fulfilled, (state, action) => {
      state.cardItem = action.payload.node;
    });
  },
});

export const cardReducer = repositoryCardSlice.reducer;
