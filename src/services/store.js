import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./authentication/loginSlice/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export default store;
