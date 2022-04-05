import React from "react";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import moment from "moment";
import useStyles from "./styles";

const FullPost = () => {
  const classes = useStyles();
  const location = useLocation();
  const post = location.state.post;

  return (
    <div>
      <Typography>{moment(post.createdAt).format("MMMM Do, YYYY")}</Typography>
      <Typography
        style={{
          paddingBottom: 2,
          fontSize: "30px",
        }}
      >
        {post.title}
      </Typography>
      <Typography
        style={{
          paddingBottom: 10,
          fontSize: "15px",
        }}
      >
        price: {post.price}
      </Typography>
      <Typography
        style={{
          paddingBottom: 10,
          fontSize: "15px",
        }}
      >
        by: {post.name}
      </Typography>
      <Typography
        style={{
          paddingBottom: 10,
          fontSize: "15px",
        }}
      >
        contact info: {post.contact}
      </Typography>
      <Typography
        item="true"
        style={{
          textAlign: "justify",
          whiteSpace: "pre-wrap",
        }}
      >
        {post.message}
      </Typography>
      <img
        className={classes.pic}
        alt="listing attachment"
        src={post.selectedFile1}
      />
    </div>
  );
};
export default FullPost;
