import React from "react";
import "./Header.css";
// import "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-inner-container">
        <div className="header-left">
          

          {/* Netflix Logo */}
          <h2 className="logo">NETFLIX</h2>

          <ul>
            {/* <li><img src="../../assets/images/NetflixLogo.png" width="100" alt="Netflix Logo" /></li> */}
            {/* <li>Netflix</li> */}
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
