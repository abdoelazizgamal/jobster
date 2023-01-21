import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAllJobsState } from "../../AllJobs/AllJobsSlice";
import { clearValues } from "../../job/jobSlice";
import { logoutUser } from "../userSlice";

export const clearStore = createAsyncThunk(
  "user/clearStore",
  (message, thunkAPI) => {
    try {
      // logout user
      thunkAPI.dispatch(logoutUser(message));
      // clear jobs value
      thunkAPI.dispatch(clearAllJobsState());
      // clear job input values
      thunkAPI.dispatch(clearValues());
      return Promise.resolve();
    } catch (error) {
      // console.log(error);
      return Promise.reject();
    }
  }
);
