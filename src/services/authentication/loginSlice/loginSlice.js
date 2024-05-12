import { createSlice } from "@reduxjs/toolkit";
import { LoginThunk, Google_Login } from "./loginThunk";
import decodeJWT from "@/utils/decodeJwt";

const loginInitials = {
  isLoading: false,
  user: null,
  successStatus: localStorage.getItem("userInfo") ? true : false,
  successMessage: undefined,
  errorStatus: false,
  errorMessage: undefined,
};

const loginSlice = createSlice({
  name: "Login State",
  initialState: loginInitials,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.successStatus = false;
        state.successMessage = undefined;
        state.errorStatus = false;
        state.errorMessage = undefined;
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        let { data, success, message } = action.payload;
        let decruptData = decodeJWT(data.accessToken);

        let userInfo = {
          id: decruptData._id,
          fullname: decruptData.fullname,
          email: decruptData.email,
          expireTime: decruptData.exp,
          issueAt: decruptData.iat,
          refreshToken: data.refreshToken,
          accessToken: data.accessToken,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        state.isLoading = false;
        state.successStatus = success;
        state.successMessage = message;
        state.user = userInfo;
        state.errorMessage = undefined;
        state.errorStatus = false;
        // state.user = action.payload;
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        let { data, status } = action.payload;
        console.log("asdas=> ", data);
        state.isLoading = false;
        state.errorStatus = status;
        state.errorMessage = data.errorDetails;
        // state.errorMessage = action.payload;
      });

    builder
      .addCase(Google_Login.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.successStatus = false;
        state.successMessage = undefined;
        state.errorStatus = false;
        state.errorMessage = undefined;
      })
      .addCase(Google_Login.fulfilled, (state, action) => {
        console.log("asdasdsa=> ", action);
      })
      .addCase(Google_Login.rejected, (state, action) => {});
  },
});

export default loginSlice.reducer;
