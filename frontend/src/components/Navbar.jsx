import React from "react";
import { Link } from "react-router-dom";
import kidney from "../assets/kidney.jpg";

const Navbar = () => {
  return (
    <nav className="h-24 bg-white shadow-md flex items-center justify-start">
      <Link to="/" className="flex items-center space-x-3">
        <img
          src={kidney}
          alt="Logo"
          className="size-24 object-contain"
        />
        <span className="text-3xl font-semibold text-gray-800 whitespace-nowrap">CKD Prediction</span>
      </Link>
    </nav>
  );
};

export default Navbar;
