"use client";
import store from "@/services/store";
import React from "react";
import { Provider } from "react-redux";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
