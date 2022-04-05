import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/post";
import { getPosts } from "../../actions/posts";

const Profile = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) => state.Posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Typography style={{ fontSize: "40px" }}>Profile Page</Typography>

      {posts.map((post) => (
        <div style={{ width: "70%" }}>
          {user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator ? (
            <div style={{ marginBottom: 12 }}>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile;
