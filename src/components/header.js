import React from "react";
import { Link } from "react-router-dom";
import { ProfileIcon } from "./icons";

const Header = () => {
  return (
    <div className="head">
      <Link to="/home">
        <p>Depression Test</p>
      </Link>

      <ProfileIcon />
    </div>
  );
};

export default Header;
