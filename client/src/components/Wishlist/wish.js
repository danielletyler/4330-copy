import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { addWish } from "../../actions/posts";

const Wish = ({ post }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  var list = JSON.parse(localStorage.getItem("wishlist"));

  const handleTitleClick = () => {
    console.log("Title Click worked");
    history("/FullPost", { state: { post: post } });
  };

  const handleWish = () => {
    list.includes(post._id)
      ? (list = list.filter((result) => result !== String(post._id)))
      : list.push(post._id);
    localStorage.setItem("wishlist", JSON.stringify(list));
    // setList(list);
    console.log(JSON.parse(localStorage.getItem("wishlist")));
  };

  return (
    <div style={{ outline: "1px solid black", padding: "15px" }}>
      <Typography onClick={handleTitleClick}>{post.title}</Typography>
      <Typography>{post.price}</Typography>
      <Button
        onClick={() => {
          dispatch(addWish(post._id));
          handleWish();
        }}
      >
        remove wish
      </Button>
    </div>
  );
};

export default Wish;
