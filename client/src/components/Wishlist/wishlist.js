import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Wish from "./wish";

const Wishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) => state.Posts);

  return (
    <div>
      <Typography>{user?.result.name}'s Wishlist</Typography>
      {posts.map((post) => (
        <div style={{ width: "70%" }}>
          {wishlist.includes(post._id) ? (
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
