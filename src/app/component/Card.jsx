import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-screen md:w-1/2 lg:w-1/3 xl:w-1/4 p-5 shadow-black bg-slate-50">
        {children}
      </div>
    </div>
  );
};

export default Card;
