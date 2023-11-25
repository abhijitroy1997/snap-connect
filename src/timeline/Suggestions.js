import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestionsTitle">Suggestions</div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="user__info">
              <span className="username">Bhumika231</span>
              <span className="relation">New to SnapConnect</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="user__info">
              <span className="username">Abhijit1264</span>
              <span className="relation">New to SnapConnect</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="user__info">
              <span className="username">Reyan001</span>
              <span className="relation">New to SnapConnect</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="user__info">
              <span className="username">Sanjoy0833</span>
              <span className="relation">New to SnapConnect</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
