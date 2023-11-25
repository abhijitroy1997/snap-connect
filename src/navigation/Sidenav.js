import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Sidenav() {
  return (
    <div className="sideNav">
      <h2 className="sideNav__logo">SnapConnect</h2>
      <div className="sideNav__buttons">
        <button className="sideNav__button">
          <HomeIcon /> <span>Home</span>
        </button>
        <button className="sideNav__button">
          <SearchIcon /> <span>Search</span>
        </button>

        <button className="sideNav__button">
          <ExploreIcon /> <span>Explore</span>
        </button>

        <button className="sideNav__button">
          <SlideshowIcon /> <span>Reels</span>
        </button>
        <button className="sideNav__button">
          <ChatIcon /> <span>Messages</span>
        </button>
        <button className="sideNav__button">
          <FavoriteBorderIcon /> <span>Notifications</span>
        </button>
        <button className="sideNav__button">
          <AddCircleOutlineIcon /> <span>Create</span>
        </button>
      </div>
      <div className="sideNav__more">
        <button className="sideNav__button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
