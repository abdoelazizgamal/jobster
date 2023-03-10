import { configureStore } from "@reduxjs/toolkit";
import AllJobsSlice from "./features/AllJobs/AllJobsSlice";
import jobSlice from "./features/job/jobSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: AllJobsSlice,
  },
});
