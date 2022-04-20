import React, { useState } from "react";
import Post from "./Post/post";
import {
  Grid,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.Posts);
  const classes = useStyles();
  const [search, setSearch] = useState("");

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div>
      <TextField
        style={{ marginBottom: 20 }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div style={{ width: "100vh" }}>
          {posts.map((post) => (
            <div style={{ width: "40vh" }}>
              {post.title.includes(search) && (
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
