import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetRepositoryCardResponseData,
  GetRepositoryCardVariables,
} from "./card-reducer-types";
import { GET_INFO, client } from "../../services";

export const getCardRepository = createAsyncThunk<
  GetRepositoryCardResponseData,
  GetRepositoryCardVariables,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("cadrRepository", async (params, thunkAPI) => {
  try {
    const response = await client.query({
      query: GET_INFO,
      variables: { getId: params.getId },
    });
    return response.data;
  } catch (error) {
    let message = "An unknown error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return thunkAPI.rejectWithValue({ message });
  }
});
