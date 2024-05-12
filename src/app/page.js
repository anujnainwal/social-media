"use client";
import React from "react";
import withAuth from "./component/protectedRoutes/ProtectedRoutes";
import Navbar from "./component/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <div
          className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16
        "
        >
          <h1 className="text-2xl font-medium">
            Responsive Navbar with TailwindCSS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Home);
