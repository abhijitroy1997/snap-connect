import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Post from "./posts/Post";
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "abhi12_",
      postImage:
        "https://i.pinimg.com/564x/c4/cd/a0/c4cda0a9d97463915a2e8ff11d31797f.jpg",
      likes: 12,
      timestamps: "12h",
    },
    {
      user: "somesh_don1",
      postImage:
        "https://i.pinimg.com/564x/96/ce/ae/96ceae78f2e879cd2054d73f81654e37.jpg",
      likes: 23,
      timestamps: "4d",
    },
    {
      user: "papiya_ray",
      postImage:
        "https://i.pinimg.com/564x/56/1d/6c/561d6cc19b95093b2ce13b1b9b7df503.jpg",
      likes: 33,
      timestamps: "22h",
    },
    {
      user: "chumki_jana_",
      postImage:
        "https://i.pinimg.com/564x/fa/35/69/fa3569a6fb9ce867a1a0e4322d468985.jpg",
      likes: 233,
      timestamps: "2d",
    },
    {
      user: "erak_ona22",
      postImage:
        "https://i.pinimg.com/564x/c8/21/62/c821626716d4d764566cc06a1f948d5a.jpg",
      likes: 65,
      timestamps: "5d",
    },
    {
      user: "sampa_78",
      postImage:
        "https://i.pinimg.com/564x/09/88/64/09886401b86d1f01f938e641cf887ecd.jpg",
      likes: 57,
      timestamps: "5d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamps={post.timestamps}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
