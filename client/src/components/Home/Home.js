import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import useStyles from "../../styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
