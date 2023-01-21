import { createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "../../../utils/authHeader";
import { customFetch } from "../../../utils/axios";
import { checkForUnauthorizedResponse } from "../../../utils/checkForUnauthorizedResponse";
import { logoutUser } from "../userSlice";

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.patch(
        "/auth/updateUser",
        user,
        authHeader(thunkAPI)
      );
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
