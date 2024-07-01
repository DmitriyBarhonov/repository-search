import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/apollo-client";
import { GET_REPOS, TOP_REPOS } from "../../services/get-repos";
import {
  GetRepositoryResponseData,
  GetRepositoryVariables,
  GetTopRepositoryResponseData,
} from "./repository-reducer-types";

export const getRepository = createAsyncThunk<
  GetRepositoryResponseData,
  GetRepositoryVariables,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("repositories/fetchSomeData", async (_, thunkAPI) => {
  try {
    const response = await client.query({
      query: GET_REPOS,
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
export const getTopRepository = createAsyncThunk<
  GetTopRepositoryResponseData,
  GetRepositoryVariables,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("repositories/fetchSomeData", async (_, thunkAPI) => {
  try {
    const response = await client.query({
      query: TOP_REPOS,
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
