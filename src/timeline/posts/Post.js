import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  ChatBubbleOutlineRounded,
  FavoriteBorderOutlined,
  MoreHoriz,
  BookmarkBorderRounded,
  Telegram,
} from "@mui/icons-material";

function Post({ user, postImage, likes, timestamps }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__author">
          <Avatar className="avatar">{user.charAt(0).toUpperCase()}</Avatar>
          {user} <span>. {timestamps}</span>
        </div>
        <MoreHoriz />
      </div>
      <div className="post__body__image">
        <img className="post__image" src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footer__icons">
          <div className="footer__icons__main">
            <FavoriteBorderOutlined className="post__icon" />
            <ChatBubbleOutlineRounded className="post__icon" />
            <Telegram className="post__icon" />
          </div>
          <div className="footer__icons__save">
            <BookmarkBorderRounded />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;
