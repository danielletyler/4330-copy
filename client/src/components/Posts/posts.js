import React, { useState } from "react";
import Post from "./Post/post";
import { Grid, CircularProgress, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.Posts);
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

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

      <div display="flex" style={{ marginBottom: 20 }}>
        <Button
          style={{ marginRight: 12 }}
          variant="contained"
          color={tag === "furniture" ? "secondary" : ""}
          onClick={() => setTag(tag === "furniture" ? "" : "furniture")}
        >
          furniture
        </Button>
        <Button
          style={{ margin: 12 }}
          variant="contained"
          color={tag === "electronics" ? "secondary" : ""}
          onClick={() => setTag(tag === "electronics" ? "" : "electronics")}
        >
          electronics
        </Button>
        <Button
          style={{ margin: 12 }}
          variant="contained"
          color={tag === "books" ? "secondary" : ""}
          onClick={() => setTag(tag === "books" ? "" : "books")}
        >
          books
        </Button>
        <Button
          style={{ margin: 12 }}
          variant="contained"
          color={tag === "music" ? "secondary" : ""}
          onClick={() => setTag(tag === "music" ? "" : "music")}
        >
          music
        </Button>
        <Button
          style={{ margin: 12 }}
          variant="contained"
          color={tag === "sports" ? "secondary" : ""}
          onClick={() => setTag(tag === "sports" ? "" : "sports")}
        >
          sports
        </Button>
      </div>
      {search === "" && tag === "" ? (
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
        <div>
          {tag === "" ? (
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
          ) : (
            <div>
              {posts.map((post) => (
                <div>
                  {tag === "furniture" && post.furniture_tag === true && (
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                      <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                  )}
                  {tag === "electronics" && post.electronic_tag === true && (
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                      <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                  )}
                  {tag === "books" && post.book_tag === true && (
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                      <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                  )}
                  {tag === "music" && post.music_tag === true && (
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                      <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                  )}
                  {tag === "sports" && post.sports_tag === true && (
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                      <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;
