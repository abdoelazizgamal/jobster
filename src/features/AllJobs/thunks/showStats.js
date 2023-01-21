import { createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "../../../utils/authHeader";
import { customFetch } from "../../../utils/axios";
import { checkForUnauthorizedResponse } from "../../../utils/checkForUnauthorizedResponse";

export const showStats = createAsyncThunk(
  "allJobs/showStats",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
