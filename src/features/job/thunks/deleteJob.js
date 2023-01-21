import { createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "../../../utils/authHeader";
import { customFetch } from "../../../utils/axios";
import { checkForUnauthorizedResponse } from "../../../utils/checkForUnauthorizedResponse";
import { hideLoading, showLoading } from "../../AllJobs/AllJobsSlice";
import { getAllJobs } from "../../AllJobs/thunks/getAllJobs";

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
      const res = await customFetch.delete(
        `/jobs/${jobId}`,
        authHeader(thunkAPI)
      );
      thunkAPI.dispatch(getAllJobs());
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
