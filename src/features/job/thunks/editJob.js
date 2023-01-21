import { createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "../../../utils/authHeader";
import { customFetch } from "../../../utils/axios";
import { checkForUnauthorizedResponse } from "../../../utils/checkForUnauthorizedResponse";
import { clearValues } from "../jobSlice";

export const editJob = createAsyncThunk(
  "job/editJob",
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await customFetch.patch(
        `/jobs/${jobId}`,
        job,
        authHeader(thunkAPI)
      );
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
