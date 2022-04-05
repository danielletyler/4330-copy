import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Wish from "./wish";

const Wishlist = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) => state.Posts);

  return (
    <div>
      <Typography>user: {user?.result.wishlist}</Typography>
      {posts.map((post) => (
        <div style={{ width: "70%" }}>
          {user?.result?.wishlist.includes(post._id) ? (
            <div style={{ marginBottom: 12 }}>
              <Wish post={post} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
