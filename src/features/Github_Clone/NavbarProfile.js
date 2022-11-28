import React from "react";
import { Link } from "react-router-dom";

const NavbarProfile = () => {
  return (
    <div id="navbarprofile">
      <div id="navDivLeft">
       <Link to="/"> <img
          alt=""
          height="80%"
          width="100%"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
        /></Link>
        <input type="text" id="navInp"></input>
        <p>Pull requests</p>
        <p>Issues</p>
        <p>Codespaces</p>
        <p>Marketplace</p>
        <p>Explore</p>
      </div>
      <div id="navDivRight">
        <i
          className="far fa-bell"
          style={{ fontSize: "20px", color: "white" }}
        ></i>
        <i
          className="fa fa-plus"
          style={{ fontSize: "15px", color: "white" }}
        ></i>
        <img
          alt=""
          height="50%"
          width="30%"
          src="https://i.stack.imgur.com/frlIf.png"
        />
      </div>
    </div>
  );
};

export default NavbarProfile;
