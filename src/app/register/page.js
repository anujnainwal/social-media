"use client";
import React, { useState } from "react";
import Card from "../component/Card";
import {
  FaFacebookF,
  FaGoogle,
  FaPinterest,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const showPassword2Handler = () => {
    setShowPassword2(!showPassword2);
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const trimmedValue = value.replace(/^[A-Z]/, "");
    setValue("password", trimmedValue);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setValue("confirmPassword", value);
  };

  const handleRegister = (values) => {
    console.log("form submitted");
    console.log("Values:", values);
  };

  return (
    <>
      <Card>
        <div className="flex justify-center mb-5">
          <FaPinterest color="red" fontSize={30} />
        </div>
        <h1 className="text-3xl text-black mb-4">Create an Account</h1>
        <p className="m-4 text-gray-400">
          Join Printest to discover and save creative ideas!
        </p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className={`w-full px-3 py-2 border ${
              errors.fullname ? "border-red-500" : "border-gray-300"
            } rounded-md ${
              errors.fullname ? "" : "mb-4"
            } focus:outline-none focus:border-blue-500`}
            {...register("fullname", {
              required: "Please enter fullname.",
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Please enter a valid name",
              },
            })}
          />
          {errors.fullname && (
            <p className="text-red-500 mb-4">{errors.fullname.message}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md ${
              errors.email ? "" : "mb-4"
            } focus:outline-none focus:border-blue-500`}
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

          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={`w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md ${
                errors.password ? "" : "mb-4"
              } focus:outline-none focus:border-blue-500`}
              {...register("password", {
                required: "Password is required.",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.",
                },
              })}
              onChange={handlePasswordChange}
            />
            <span
              className={`absolute inset-y-0 right-0 top-1/2 transform translate-y-[-50%]   px-3 cursor-pointer`}
              onClick={showPasswordHandler}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 mb-4">{errors.password.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={`${showPassword2 ? "text" : "password"}`}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full px-3 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md  ${
                errors.confirmPassword ? "" : "mb-4"
              } focus:outline-none focus:border-blue-500`}
              {...register("confirmPassword", {
                required: "Confirm Password is required.",
                validate: (value) =>
                  value === getValues("password") ||
                  "Password and Confirm Password do not match.",
              })}
              onChange={handleConfirmPasswordChange}
            />
            <span
              className="absolute inset-y-0 right-0  px-3 cursor-pointer"
              onClick={showPassword2Handler}
            >
              {showPassword2 ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 mb-4">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-center bg-red-600 w-full rounded-lg p-2 text-white"
          >
            Sign Up
          </button>
          <div className="text-center w-full mt-2">OR</div>
          <button className="flex items-center justify-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <FaFacebookF className="text-xl text-left" />
            Continue with Facebook
          </button>
          <button className="flex items-center justify-center gap-2 w-full mt-2 mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
            <FaGoogle className="text-red-600" />
            Continue with Google
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          By signing up, you agree to Printest
          <strong className="text-black">Terms of Service</strong> and
          <strong className="text-black">Privacy Policy</strong>.
        </p>
        <p className="text-center mt-4 cursor-pointer">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </Card>
    </>
  );
};

export default Register;
