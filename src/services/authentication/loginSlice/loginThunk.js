import { GOOGLE_LOGIN_URL, USER_LOGIN } from "@/api/api_routes";
import axiosInstance from "@/api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const LoginThunk = createAsyncThunk(
  "/authentication/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(USER_LOGIN, {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  }
);

const Google_Login = createAsyncThunk(
  "google/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(GOOGLE_LOGIN_URL);
      window.location.href = response.data.redirect_uri;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  }
);

export { LoginThunk, Google_Login };
