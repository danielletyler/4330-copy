import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const Wish = ({ post }) => {
  const history = useNavigate();

  const handleTitleClick = () => {
    console.log("Title Click worked");
    history("/FullPost", { state: { post: post } });
  };

  return (
    <div style={{ outline: "1px solid black", padding: "15px" }}>
      <Typography onClick={handleTitleClick}>{post.title}</Typography>
      <Typography>{post.price}</Typography>
      <Button>remove wish</Button>
    </div>
  );
};

export default Wish;
