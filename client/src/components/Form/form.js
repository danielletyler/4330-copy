import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.Posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    price: "",
    contact: "",
    furniture_tag: "",
    electronic_tag: "",
    book_tag: "",
    music_tag: "",
    sports_tag: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      price: "",
      contact: "",
      furniture_tag: "",
      electronic_tag: "",
      book_tag: "",
      music_tag: "",
      sports_tag: "",
    });
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to create a post.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing Post" : "New Post"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          style={{ whiteSpace: "pre-wrap" }}
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div style={{ display: "flex" }}>
          <Button
            name="furniture"
            variant="contained"
            fullWidth
            color={postData.furniture_tag ? "primary" : "secondary"}
            onClick={
              postData.furniture_tag
                ? (e) => setPostData({ ...postData, furniture_tag: false })
                : (e) => setPostData({ ...postData, furniture_tag: true })
            }
          >
            furniture
          </Button>
          <Button
            name="electronic"
            variant="contained"
            fullWidth
            color={postData.electronic_tag ? "primary" : "secondary"}
            onClick={
              postData.electronic_tag
                ? (e) => setPostData({ ...postData, electronic_tag: false })
                : (e) => setPostData({ ...postData, electronic_tag: true })
            }
          >
            electronic
          </Button>
          <Button
            name="furniture"
            variant="contained"
            fullWidth
            color={postData.book_tag ? "primary" : "secondary"}
            onClick={
              postData.book_tag
                ? (e) => setPostData({ ...postData, book_tag: false })
                : (e) => setPostData({ ...postData, book_tag: true })
            }
          >
            book
          </Button>
          <Button
            name="furniture"
            variant="contained"
            fullWidth
            color={postData.music_tag ? "primary" : "secondary"}
            onClick={
              postData.music_tag
                ? (e) => setPostData({ ...postData, music_tag: false })
                : (e) => setPostData({ ...postData, music_tag: true })
            }
          >
            music
          </Button>
          <Button
            name="furniture"
            variant="contained"
            fullWidth
            color={postData.sports_tag ? "primary" : "secondary"}
            onClick={
              postData.sports_tag
                ? (e) => setPostData({ ...postData, sports_tag: false })
                : (e) => setPostData({ ...postData, sports_tag: true })
            }
          >
            sports
          </Button>
        </div>
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
        <TextField
          name="contact"
          variant="outlined"
          label="Contact info"
          fullWidth
          value={postData.contact}
          onChange={(e) =>
            setPostData({ ...postData, contact: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file 1"
            multiple={false}
            value={postData.selectedFile1}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile1: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="small"
          type="submit"
        >
          submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
