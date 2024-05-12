"use client";
import React, { useEffect } from "react";
import Card from "../component/Card";
import { FaFacebookF, FaGoogle, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toastHelper from "@/utils/customToast";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginThunk,
  Google_Login,
} from "@/services/authentication/loginSlice/loginThunk";

const Login = () => {
  let { isLoading, successStatus, successMessage, errorStatus, errorMessage } =
    useSelector((state) => state.login);

  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (values) => {
    dispatch(LoginThunk(values));
  };

  useEffect(() => {
    if (isLoading === false && successStatus === true) {
      toastHelper(successMessage, "success");
    } else if (isLoading === false && errorStatus !== false) {
      toastHelper(errorMessage, "error");
    }
  }, [isLoading, successMessage, successStatus, errorStatus, errorMessage]);

  const handleGoogleLogin = () => {
    dispatch(Google_Login());
  };

  return (
    <>
      <Card>
        <div className="flex justify-center mb-5">
          <FaPinterest color="red" fontSize={30} />
        </div>
        <h1 className="text-3xl text-black mb-4">Log in to see more</h1>
        <p className="m-4 text-gray-400">
          Access Printest best ideas with free account.
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            type="text"
            placeholder="Enter email address..."
            className={`w-full px-3 py-2 border ${
              errors.email ? "" : "mb-4"
            } rounded-md focus:outline-none outline-none focus:border-blue-500  ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mb-4">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Enter password..."
            name="password"
            className={`w-full px-3 py-2 border ${
              errors.password ? "" : "mb-4"
            } rounded-md focus:outline-none focus:border-blue-500  ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            {...register("password", {
              required: "Password is required.",

              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 mb-4">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className={`text-center   w-full rounded-lg p-2 text-white ${
              isLoading === true ? "cursor-no-drop bg-[#D3D3D3]" : "bg-red-600"
            }`}
            disabled={isLoading === true ? true : false}
          >
            Log in
          </button>
        </form>
        <div className="text-center w-full mt-2">OR</div>
        <button className="flex items-center justify-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <FaFacebookF className="text-xl text-left" />
          Continue with Facebook
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full mt-2 mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="text-red-600" />
          Continue with Google
        </button>
        <p className="text-center text-sm text-gray-400 mt-4">
          By Continuing you are agree to Printest
          <strong className="text-black">
            Terms of Services Privacy Policy
          </strong>
        </p>
        <p className="text-center text-sm text-gray-400 mt-4 cursor-pointer">
          Forget your password?
        </p>
        <hr className="mt-2"></hr>
        <p className="text-center mt-2 mb-2 text-gray-600">
          Not on Printest yet?
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </Card>
      <Toaster />
    </>
  );
};

export default Login;
