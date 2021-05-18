import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://i.imgur.com/LYKbICJ.png?1"
        alt="header__icon"
      />

      <IconButton>
        <PublishIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
