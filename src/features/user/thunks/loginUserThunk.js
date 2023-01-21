import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../../utils/axios";

export const loginUserThunk = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/auth/login", user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
