import { createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "../../../utils/authHeader";
import { customFetch } from "../../../utils/axios";
import { checkForUnauthorizedResponse } from "../../../utils/checkForUnauthorizedResponse";
import { logoutUser } from "../../user/userSlice";
import { clearValues } from "../jobSlice";

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    try {
      const res = await customFetch.post("/jobs", job, authHeader(thunkAPI));
      thunkAPI.dispatch(clearValues());
      return res.data;
    } catch (error) {
      // logout user
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
