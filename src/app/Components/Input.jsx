import React, { useState } from "react";

const InputForm = ({ handleSubmit, handleInputChange, address }) => {
//   const [address, setAddress] = useState("");

//   const handleInputChange = async (e) => {
//     e.preventDefault();
//     const value = e.target.value;
//     console.log(value);
//     setAddress(e.target.value);
//   };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter account address"
        value={address}
        onChange={handleInputChange}
        className="p-2 border rounded-md text-black"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Get Balances
      </button>
    </form>
  );
};

export default InputForm;
