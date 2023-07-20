import { Search, Notification, Line } from "../components/NavIcons";
import NavMan from "../assets/imgs/photo.png";
import { useState } from "react";
import Saidbar from "./Saidbar";

const Navbar = ({navName}) => {

  
  return (
    <div className="navbar">
      <h3 className="nav__title">{navName}</h3>
      <div className="right">
        <a href="#">
          <Search />
        </a>
        <a href="#">
          {" "}
          <Notification />
        </a>

        <Line />
        <p className="jones">Jones Ferdinand</p>
        <img src={NavMan} alt="man" />
      </div>
    </div>
  );
};

export default Navbar;
