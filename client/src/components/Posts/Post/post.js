import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { deletePost, addWish } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  var list = JSON.parse(localStorage.getItem("wishlist"));
  const history = useNavigate();

  const handleEdit = () => {
    console.log(post._id);
    history("/add", { state: { post: post } });
  };

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
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile1}
        title={post.title}
      />
      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.name}</Typography> */}
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small" onClick={handleEdit}>
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        onClick={handleTitleClick}
      >
        {post.title}
      </Typography>
      <Typography
        className={classes.price}
        variant="h6"
        component="p"
        gutterBottom
      >
        {post.price}
      </Typography>
      <CardContent>
        <div
          style={{
            height: "117px",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {post.message}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {user?.result?.googleId === post?.creator ||
          (user?.result?._id === post?.creator && (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                dispatch(deletePost(post._id));
              }}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          ))}
        {user?.result._id !== post?.creator && (
          <Button
            onClick={() => {
              dispatch(addWish(post._id));
              handleWish();
              // console.log(user);
            }}
          >
            {list.includes(post._id)
              ? "Remove from wishlist"
              : "Add to wishlist"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
