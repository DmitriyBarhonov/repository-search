import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetRepositoryResponseData,
  GetRepositoryVariables,
  GetTopRepositoryResponseData,
} from "./repository-reducer-types";
import { GET_REPOS, TOP_REPOS, client } from "../../services";

export const getListRepository = createAsyncThunk<
  GetRepositoryResponseData,
  GetRepositoryVariables,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("repositories/fetchSomeData", async (params, thunkAPI) => {
  try {
    const response = await client.query({
      query: GET_REPOS,
      variables: { getQuery: params.getQuery },
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
export const getListTopRepository = createAsyncThunk<
  GetTopRepositoryResponseData,
  GetRepositoryVariables,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("repositories/fetchSomeData", async (params, thunkAPI) => {
  try {
    const response = await client.query({
      query: TOP_REPOS,
      variables: { getQuery: params.getQuery },
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
