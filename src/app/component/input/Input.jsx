import React from "react";

const Input = ({ type, name, ref, placeholder, ...props }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        // value={inputValue}
        // onChange={handleChange}

        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
