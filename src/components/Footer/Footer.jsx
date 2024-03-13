import React from "react";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-10">
      <p className="text-center">
        &copy;2024 All rights reserved by Shahin Hossain
        <FaReact className="inline text-sky-500 text-2xl ms-2" />
      </p>
    </div>
  );
};

export default Footer;
