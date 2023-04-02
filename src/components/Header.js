import React from "react";
// images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="home">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
